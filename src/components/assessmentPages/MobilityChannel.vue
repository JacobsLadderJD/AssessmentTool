<template>
  <div class="form-page">
    <div class="form-section">
      <div class="grid9">
        <!-- Row 1 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          MOBILITY CHANNEL
        </div>
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
          <input v-model="holdsForearmProp" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="holdsForearmProp" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="holdsForearmProp" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="holdsForearmProp" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="holdsForearmProp" type="radio" value="NA">
        </div>
        <!-- Row 3 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 3; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="holdsForearmPropNotes"></textarea>
        </div>
        <!-- Row 4 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Belly Rotations
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Right
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="bellyRotationsRight" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="bellyRotationsRight" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="bellyRotationsRight" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="bellyRotationsRight" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="bellyRotationsRight" type="radio" value="NA">
        </div>
        <!-- Row 5 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 5; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="bellyRotationsNotes"></textarea>
        </div>
        <!-- Row 6 -->
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Left
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="bellyRotationsLeftNotes" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="bellyRotationsLeftNotes" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="bellyRotationsLeftNotes" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="bellyRotationsLeftNotes" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="bellyRotationsLeftNotes" type="radio" value="NA">
        </div>
        <!-- Row 7 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          LEVEL III
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Belly Crawl
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="bellCrawl" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="bellCrawl" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="bellCrawl" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="bellCrawl" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="bellCrawl" type="radio" value="NA">
        </div>
        <!-- Row 8 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 8; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="bellCrawlNotes"></textarea>
        </div>
        <!-- Row 9 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          From Prone to Cat
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="fromProneToCat" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="fromProneToCat" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="fromProneToCat" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="fromProneToCat" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="fromProneToCat" type="radio" value="NA">
        </div>
        <!-- Row 10 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 10; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="fromProneToCatNotes"></textarea>
        </div>
        <!-- Row 11 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Momentary Sitting
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="momentarySitting" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="momentarySitting" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="momentarySitting" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="momentarySitting" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="momentarySitting" type="radio" value="NA">
        </div>
        <!-- Row 12 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 12; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="momentarySittingNotes"></textarea>
        </div>
        <!-- Row 13 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Move to Upright Sitting
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="moveToUprightSitting" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="moveToUprightSitting" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="moveToUprightSitting" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="moveToUprightSitting" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="moveToUprightSitting" type="radio" value="NA">
        </div>
        <!-- Row 14 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 14; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="moveToUprightSittingNotes"></textarea>
        </div>
        <!-- Row 15 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Pulls to Feet
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pullsToFeet" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pullsToFeet" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pullsToFeet" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pullsToFeet" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pullsToFeet" type="radio" value="NA">
        </div>
        <!-- Row 16 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 16; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="pullsToFeetNotes"></textarea>
        </div>
        <!-- Row 17 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Hold Creep Position
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="holdCreepPosition" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="holdCreepPosition" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="holdCreepPosition" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="holdCreepPosition" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="holdCreepPosition" type="radio" value="NA">
        </div>
        <!-- Row 18 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 18; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="holdCreepPositionNotes"></textarea>
        </div>
        <!-- Row 19 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Hold Creep Position
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="holdCreepPosition" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="holdCreepPosition" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="holdCreepPosition" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="holdCreepPosition" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="holdCreepPosition" type="radio" value="NA">
        </div>
        <!-- Row 20 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 20; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="holdCreepPositionNotes"></textarea>
        </div>
        <!-- Row 21 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          LEVEL IV
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Creep
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="creep" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="creep" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="creep" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="creep" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="creep" type="radio" value="NA">
        </div>
        <!-- Row 22 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 22; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="creepNotes"></textarea>
        </div>
        <!-- Row 23 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          From Seated to Standing
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="fromSeatedToStanding" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="fromSeatedToStanding" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="fromSeatedToStanding" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="fromSeatedToStanding" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="fromSeatedToStanding" type="radio" value="NA">
        </div>
        <!-- Row 24 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 24; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="fromSeatedToStandingNotes"></textarea>
        </div>
        <!-- Row 25 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Standing
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="Standing" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="Standing" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="Standing" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="Standing" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="Standing" type="radio" value="NA">
        </div>
        <!-- Row 26 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 26; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="standingNotes"></textarea>
        </div>
        <!-- Row 27 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 27; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Protective Response
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 27; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="protectiveResponse" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 27; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="protectiveResponse" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 27; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="protectiveResponse" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 27; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="protectiveResponse" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 27; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="protectiveResponse" type="radio" value="NA">
        </div>
        <!-- Row 28 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 28; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="protectiveResponseNotes"></textarea>
        </div>
        <!-- Row 29 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          LEVEL V
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Walks
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="walks" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="walks" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="walks" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="walks" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="walks" type="radio" value="NA">
        </div>
        <!-- Row 30 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 30; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="walksNotes"></textarea>
        </div>
        <!-- Row 31 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Gait
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="gait" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="gait" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="gait" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="gait" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="gait" type="radio" value="NA">
        </div>
        <!-- Row 32 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 32; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="gaitNotes"></textarea>
        </div>
        <!-- Row 33 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 33; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Initial March
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 33; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="initialMarch" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 33; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="initialMarch" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 33; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="initialMarch" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 33; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="initialMarch" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 33; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="initialMarch" type="radio" value="NA">
        </div>
        <!-- Row 34 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 34; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="initialMarchNotes"></textarea>
        </div>
        <!-- Row 35 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 35; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Kicks Stationary Ball
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 35; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="kicksStationaryBall" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 35; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="kicksStationaryBall" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 35; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="kicksStationaryBall" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 35; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="kicksStationaryBall" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 35; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="kicksStationaryBall" type="radio" value="NA">
        </div>
        <!-- Row 36 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 36; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="initialMarchNotes"></textarea>
        </div>
        <!-- Row 37 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 37; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Kicks Stationary Ball
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 37; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="kicksStationaryBall" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 37; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="kicksStationaryBall" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 37; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="kicksStationaryBall" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 37; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="kicksStationaryBall" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 37; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="kicksStationaryBall" type="radio" value="NA">
        </div>
        <!-- Row 38 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 38; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="kicksStationaryBallNotes"></textarea>
        </div>
        <!-- Row 39 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 39; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          LEVEL VI
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 39; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Cross March
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 39; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="crossMarch" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 39; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="crossMarch" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 39; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="crossMarch" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 39; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="crossMarch" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 39; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="crossMarch" type="radio" value="NA">
        </div>
        <!-- Row 40 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 40; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="crossMarchNotes"></textarea>
        </div>
        <!-- Row 41 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Run
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="run" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="run" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="run" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="run" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="run" type="radio" value="NA">
        </div>
        <!-- Row 42 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 42; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="runNotes"></textarea>
        </div>
        <!-- Row 43 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 43; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Throw a Medium-Sized Ball
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 43; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="throwMediumSizedBall" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 43; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="throwMediumSizedBall" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 43; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="throwMediumSizedBall" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 43; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="throwMediumSizedBall" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 43; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="throwMediumSizedBall" type="radio" value="NA">
        </div>
        <!-- Row 44 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 44; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="throwMediumSizedBallNotes"></textarea>
        </div>
        <!-- Row 45 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 45; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Throw a Small-Sized Ball
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 45; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="throwSmallSizedBall" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 45; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="throwSmallSizedBall" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 45; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="throwSmallSizedBall" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 45; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="throwSmallSizedBall" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 45; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="throwSmallSizedBall" type="radio" value="NA">
        </div>
        <!-- Row 46 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 46; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="throwSmallSizedBallNotes"></textarea>
        </div>
        <!-- Row 47 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 47; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Catch a Medium-Sized Ball
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 47; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="catchAMediumSizedBall" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 47; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="catchAMediumSizedBall" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 47; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="catchAMediumSizedBall" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 47; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="catchAMediumSizedBall" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 47; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="catchAMediumSizedBall" type="radio" value="NA">
        </div>
        <!-- Row 48 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 48; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="catchAMediumSizedBallNotes"></textarea>
        </div>
        <!-- Row 49 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 49; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Jump Over Object
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 49; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="jumpOverObject" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 49; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="jumpOverObject" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 49; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="jumpOverObject" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 49; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="jumpOverObject" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 49; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="jumpOverObject" type="radio" value="NA">
        </div>
        <!-- Row 50 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 50; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="jumpOverObjectNotes"></textarea>
        </div>
        <!-- Row 51 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 51; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            LEVEL VII
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 51; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Balance on One Foot with Eyes Open
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 51; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Right
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 51; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="balanceOnOneFootWithEyesOpenRight" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 51; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="balanceOnOneFootWithEyesOpenRight" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 51; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="balanceOnOneFootWithEyesOpenRight" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 51; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="balanceOnOneFootWithEyesOpenRight" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 51; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="balanceOnOneFootWithEyesOpenRight" type="radio" value="NA">
        </div>
        <!-- Row 52 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 52; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="balanceOnOneFootWithEyesOpenNotes"></textarea>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 52; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Left
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 52; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="balanceOnOneFootWithEyesOpenLeft" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 52; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="balanceOnOneFootWithEyesOpenLeft" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 52; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="balanceOnOneFootWithEyesOpenLeft" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 52; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="balanceOnOneFootWithEyesOpenLeft" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 52; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="balanceOnOneFootWithEyesOpenLeft" type="radio" value="NA">
        </div>
        <!-- Row 53 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 53; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Balance on One Foot with Eyes Closed
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 53; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Right
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 53; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="balanceOnOneFootWithEyesClosedRight" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 53; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="balanceOnOneFootWithEyesClosedRight" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 53; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="balanceOnOneFootWithEyesClosedRight" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 53; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="balanceOnOneFootWithEyesClosedRight" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 53; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="balanceOnOneFootWithEyesClosedRight" type="radio" value="NA">
        </div>
        <!-- Row 54 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 54; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="balanceOnOneFootWithEyesClosedNotes"></textarea>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 54; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Left
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 54; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="balanceOnOneFootWithEyesClosedLeft" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 54; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="balanceOnOneFootWithEyesClosedLeft" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 54; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="balanceOnOneFootWithEyesClosedLeft" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 54; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="balanceOnOneFootWithEyesClosedLeft" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 54; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="balanceOnOneFootWithEyesClosedLeft" type="radio" value="NA">
        </div>

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
    verbalResponseToSounds: "",
    verbalResponseToSoundsNotes: "",

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
