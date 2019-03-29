<template>
  <div class="form-page">
    <div class="form-section">
      <h1 class="title" style="text-align:left">Tactility Channel</h1>
      <div class="grid6">
        <!-- row 1 -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          -3
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          -2
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          -1
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          0
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          +1
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          +2
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          +3
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          NA
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          #
        </div>
        <!-- row 2 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          LEVEL II
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 2; grid-row-start: 2; grid-row-end: span 1; text-align: left; justify-self: left;">
          Deep Pressure
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="deepPressure.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="deepPressure.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="deepPressure.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="deepPressure.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="deepPressure.value" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="deepPressure.value" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="deepPressure.value" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="deepPressure.value" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          10
        </div>
        <!-- Row 3 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 3; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="deepPressure.comment"></textarea>
        </div>
        <!-- Row 4 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: left; justify-self: left;">
          Tonicity
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          -3
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          -2
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          -1
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          0
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          +1
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          +2
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          +3
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          NA
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          #
        </div>
        <!-- Row 5 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 15; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="tonicity.comment"></textarea>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: left; justify-self: left;">
          Face
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.face" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.face" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.face" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.face" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.face" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.face" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.face" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.face" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          11
        </div>
        <!-- Row 6 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>

        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: left; justify-self: left;">
          Neck
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.neck" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.neck" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.neck" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.neck" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.neck" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.neck" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.neck" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.neck" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          12
        </div>
        <!-- Row 7 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: left; justify-self: left;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: left; justify-self: left;">
          Trunk
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.trunk" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.trunk" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.trunk" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.trunk" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.trunk" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.trunk" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.trunk" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.trunk" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          13
        </div>
        <!-- Row 8 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: left; justify-self: left;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: left; justify-self: left;">
          Right Shoulder
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.shoulderRight" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.shoulderRight" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.shoulderRight" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.shoulderRight" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.shoulderRight" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.shoulderRight" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.shoulderRight" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.shoulderRight" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          14
        </div>
        <!-- Row 9 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: left; justify-self: left;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: left; justify-self: left;">
          Right Arm
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.armRight" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.armRight" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.armRight" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.armRight" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.armRight" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.armRight" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.armRight" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.armRight" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          15
        </div>
        <!-- Row 10 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: left; justify-self: left;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: left; justify-self: left;">
          Right Hand
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.handRight" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.handRight" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.handRight" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.handRight" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.handRight" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.handRight" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.handRight" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.handRight" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          16
        </div>
        <!-- Row 11 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: left; justify-self: left;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: left; justify-self: left;">
          Right Hip
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.hipRight" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.hipRight" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.hipRight" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.hipRight" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.hipRight" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.hipRight" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.hipRight" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.hipRight" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          17
        </div>
        <!-- Row 12 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: left; justify-self: left;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: left; justify-self: left;">
          Right Leg
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.legRight" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.legRight" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.legRight" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.legRight" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.legRight" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.legRight" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.legRight" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.legRight" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          18
        </div>
        <!-- Row 13 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: left; justify-self: left;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: left; justify-self: left;">
          Right Foot
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.footRight" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.footRight" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.footRight" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.footRight" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.footRight" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.footRight" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.footRight" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.footRight" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          19
        </div>
        <!-- Row 14 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: left; justify-self: left;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: left; justify-self: left;">
          Left Shoulder
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.shoulderLeft" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.shoulderLeft" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.shoulderLeft" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.shoulderLeft" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.shoulderLeft" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.shoulderLeft" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.shoulderLeft" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.shoulderLeft" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">
          20
        </div>
        <!-- Row 15 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: left; justify-self: left;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: left; justify-self: left;">
          Left Arm
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.armLeft" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.armLeft" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.armLeft" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.armLeft" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.armLeft" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.armLeft" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.armLeft" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.armLeft" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          21
        </div>
        <!-- Row 16 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: left; justify-self: left;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: left; justify-self: left;">
          Left Hand
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.handLeft" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.handLeft" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.handLeft" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.handLeft" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.handLeft" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.handLeft" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.handLeft" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.handLeft" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          22
        </div>
        <!-- Row 17 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: left; justify-self: left;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: left; justify-self: left;">
          Left Hip
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.hipLeft" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.hipLeft" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.hipLeft" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.hipLeft" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.hipLeft" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.hipLeft" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.hipLeft" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.hipLeft" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
          23
        </div>
        <!-- Row 18 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: left; justify-self: left;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: left; justify-self: left;">
          Left Leg
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.legLeft" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.legLeft" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.legLeft" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.legLeft" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.legLeft" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.legLeft" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.legLeft" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.legLeft" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          24
        </div>
        <!-- Row 19 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: left; justify-self: left;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: left; justify-self: left;">
          Left Foot
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.footLeft" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.footLeft" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.footLeft" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.footLeft" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.footLeft" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.footLeft" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.footLeft" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tonicity.footLeft" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          25
        </div>
        <!-- Row 20 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 9; grid-row-start: 20; grid-row-end: span 1; text-align: Left; justify-self: start;">
          Reaction to Deep Pain
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="deepPainReaction.value" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">
          26
        </div>
        <!-- Row 21 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 21; grid-row-end: span 1; text-align: Left; justify-self: start; align-items: start;">
          <textarea v-model="deepPainReaction.comment"></textarea>
        </div>
        <!-- Row 22 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          LEVEL III
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: left; justify-self: start;">
          Surface Touch
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: left; justify-self: start;">
          Right Hand
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.handRight" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.handRight" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.handRight" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.handRight" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.handRight" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.handRight" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.handRight" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.handRight" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          27
        </div>
        <!-- Row 23 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 3; text-align: left; justify-self: start;">
          <textarea v-model="surfaceTouch.comment"></textarea>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: left; justify-self: start;">
          Right Foot
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.footRight" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.footRight" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.footRight" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.footRight" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.footRight" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.footRight" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.footRight" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.footRight" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          28
        </div>
        <!-- Row 24 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: left; justify-self: start;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: left; justify-self: start;">
          Left Hand
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.handLeft" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.handLeft" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.handLeft" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.handLeft" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.handLeft" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.handLeft" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.handLeft" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.handLeft" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          29
        </div>
        <!-- Row 25 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: left; justify-self: start;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: left; justify-self: start;">
          Left Foot
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.footLeft" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.footLeft" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.footLeft" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.footLeft" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.footLeft" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.footLeft" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.footLeft" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="surfaceTouch.footLeft" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          30
        </div>
        <!-- Row 26 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 2; grid-row-start: 26; grid-row-end: span 1; text-align: left; justify-self: left; margin-top: 3em;">
          Reaction to Surface Pain
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="surfacePainReaction.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="surfacePainReaction.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="surfacePainReaction.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="surfacePainReaction.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="surfacePainReaction.value" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="surfacePainReaction.value" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="surfacePainReaction.value" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="surfacePainReaction.value" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 12; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          10
        </div>
        <!-- Row 27 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 27; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="surfacePainReaction.comment"></textarea>
        </div>
        <!-- Row 28 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Olfactory Stimulation
        </div>
        <!-- Row 29 FIXME: needs channel score inputs! -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 29; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="olfactoryStimulation.comment"></textarea>
        </div>
        <!-- Row 30 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Facial Surface Awareness
        </div>
        <!-- Row 31 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 31; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="facialSurfaceAwareness.comment"></textarea>
        </div>
      </div>
      <div class="grid7">
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

        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Oral Textural Awareness
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Mushy
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="oralTexturalAwareness.mushy" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="oralTexturalAwareness.mushy" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="oralTexturalAwareness.mushy" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="oralTexturalAwareness.mushy" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="oralTexturalAwareness.mushy" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="oralTexturalAwareness.mushy" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="oralTexturalAwareness.mushy" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <!-- N/A? FIXME -->
        </div>
        <!-- Row 3 -->
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Crunchy
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="oralTexturalAwareness.crunchy" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="oralTexturalAwareness.crunchy" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="oralTexturalAwareness.crunchy" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="oralTexturalAwareness.crunchy" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="oralTexturalAwareness.crunchy" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="oralTexturalAwareness.crunchy" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="oralTexturalAwareness.crunchy" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">
        </div>
        <!-- Row 4 FIXME: Lacking comment section! -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          LEVEL IV
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Page Discrimination
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Cardboard Books
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pageDiscrimination.cardboard" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pageDiscrimination.cardboard" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pageDiscrimination.cardboard" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pageDiscrimination.cardboard" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pageDiscrimination.cardboard" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pageDiscrimination.cardboard" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pageDiscrimination.cardboard" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
        </div>
        <!-- Row 5 -->
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Paper Books
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pageDiscrimination.paper" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pageDiscrimination.paper" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pageDiscrimination.paper" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pageDiscrimination.paper" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pageDiscrimination.paper" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pageDiscrimination.paper" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pageDiscrimination.paper" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <!-- N/A ? FIXME -->
        </div>
        <!-- Row 6 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          LEVEL V
        </div>
        <div class="cell" style="grid-column-start:2; grid-column-end: span 1; grid-row-start:6; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Tactile Discrimination with Medium-Sized Objects
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Visual Exposure
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationMedium.visual" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationMedium.visual" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationMedium.visual" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationMedium.visual" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationMedium.visual" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationMedium.visual" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationMedium.visual" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
        </div>
        <!-- Row 7 -->
        <div class="cell" style="grid-column-start:2; grid-column-end: span 1; grid-row-start:7; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Visual Exposure:
          <input type="text" v-model="badComment"/>
          / 4
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Without Exposure
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationMedium.nonvisual" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationMedium.nonvisual" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationMedium.nonvisual" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationMedium.nonvisual" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationMedium.nonvisual" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationMedium.nonvisual" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationMedium.nonvisual" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
        </div>
        <!-- Row 8 -->
        <div class="cell" style="grid-column-start:2; grid-column-end: span 1; grid-row-start:8; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Without Visual Exposure:
          <input type="text" v-model="badComment"/>
          / 4
        </div>
        <!-- Row 9 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          LEVEL VI
        </div>
        <div class="cell" style="grid-column-start:2; grid-column-end: span 1; grid-row-start:9; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Tactile Discrimination with Small-Sized Objects
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Visual Exposure
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationSmall.visual" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationSmall.visual" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationSmall.visual" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationSmall.visual" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationSmall.visual" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationSmall.visual" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationSmall.visual" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
        </div>
        <!-- Row 10 -->
        <div class="cell" style="grid-column-start:2; grid-column-end: span 1; grid-row-start:10; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Visual Exposure:
          <input type="text" v-model="badComment"/>
          / 4
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Without Exposure
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationSmall.nonvisual" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationSmall.nonvisual" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationSmall.nonvisual" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationSmall.nonvisual" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationSmall.nonvisual" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationSmall.nonvisual" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="tactileDiscriminationSmall.nonvisual" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
        </div>
        <!-- Row 11 -->
        <div class="cell" style="grid-column-start:2; grid-column-end: span 1; grid-row-start:11; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Without Visual Exposure:
          <input type="text" v-model="badComment"/>
          / 4
        </div>
        <!-- Row 12 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          LEVEL VII
        </div>
        <div class="cell" style="grid-column-start:2; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Rhomberg
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Eyes Open
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rhomberg.eyesOpen" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rhomberg.eyesOpen" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rhomberg.eyesOpen" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rhomberg.eyesOpen" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rhomberg.eyesOpen" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rhomberg.eyesOpen" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rhomberg.eyesOpen" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
        </div>
        <!-- Row 13 -->
        <div class="cell" style="grid-column-start:2; grid-column-end: span 1; grid-row-start:13; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Eyes Open:
          <input type="text" v-model="badComment"/>
          seconds
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Eyes Closed
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rhomberg.eyesClosed" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rhomberg.eyesClosed" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rhomberg.eyesClosed" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rhomberg.eyesClosed" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rhomberg.eyesClosed" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rhomberg.eyesClosed" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rhomberg.eyesClosed" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
        </div>
        <!-- Row 14 -->
        <div class="cell" style="grid-column-start:2; grid-column-end: span 1; grid-row-start:14; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Eyes Closed
          <input type="text" v-model="badComment"/>
          Seconds
        </div>
        <!-- Row 15 -->
        <div class="cell" style="grid-column-start:2; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Manns - Right Foot in Front
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Eyes Open
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsRightFoot.eyesOpen" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsRightFoot.eyesOpen" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsRightFoot.eyesOpen" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsRightFoot.eyesOpen" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsRightFoot.eyesOpen" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsRightFoot.eyesOpen" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsRightFoot.eyesOpen" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
        </div>
        <!-- Row 16 -->
        <div class="cell" style="grid-column-start:2; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Eyes Open:
          <input type="text" v-model="badComment"/>
          Seconds
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Eyes Closed
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsRightFoot.eyesClosed" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsRightFoot.eyesClosed" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsRightFoot.eyesClosed" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsRightFoot.eyesClosed" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsRightFoot.eyesClosed" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsRightFoot.eyesClosed" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsRightFoot.eyesClosed" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
        </div>
        <!-- Row 17 -->
        <div class="cell" style="grid-column-start:2; grid-column-end: span 1; grid-row-start:17; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Eyes Closed:
          <input type="text" v-model="badComment"/>
          Seconds
        </div>
        <!-- Row 18 -->
        <div class="cell" style="grid-column-start:2; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Manns - Left Foot in Front
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Eyes Open
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsLeftFoot.eyesOpen" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsLeftFoot.eyesOpen" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsLeftFoot.eyesOpen" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsLeftFoot.eyesOpen" type="radio" value="0">
        </div>
        <!-- FIXME Manns is a NegativeChannelScore! -->
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsLeftFoot.eyesOpen" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsLeftFoot.eyesOpen" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsLeftFoot.eyesOpen" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
        </div>
        <!-- Row 19 -->
        <div class="cell" style="grid-column-start:2; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Eyes Open:
          <input type="text" v-model="badComment"/>
          Seconds
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Eyes Closed
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsLeftFoot.eyesClosed" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsLeftFoot.eyesClosed" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsLeftFoot.eyesClosed" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsLeftFoot.eyesClosed" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsLeftFoot.eyesClosed" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsLeftFoot.eyesClosed" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="mannsLeftFoot.eyesClosed" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
        </div>
        <!-- Row 20 -->
        <div class="cell" style="grid-column-start:2; grid-column-end: span 1; grid-row-start:20; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Eyes Closed:
          <input type="text" v-model="badComment"/>
          Seconds
        </div>
        <!-- Row 21 -->
        <div class="cell" style="grid-column-start:2; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Arm Matching
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          In Front
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="armMatching.front" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="armMatching.front" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="armMatching.front" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="armMatching.front" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="armMatching.front" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="armMatching.front" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="armMatching.front" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: center; justify-self: center;">
        </div>
        <!-- Row 22 -->
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Above Head
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="armMatching.above" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="armMatching.above" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="armMatching.above" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="armMatching.above" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="armMatching.above" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="armMatching.above" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="armMatching.above" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
        </div>
        <!-- Row 23 -->
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Out to Side
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="armMatching.sides" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="armMatching.sides" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="armMatching.sides" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="armMatching.sides" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="armMatching.sides" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="armMatching.sides" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="armMatching.sides" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
        </div>
        <!-- Row 24 -->
        <div class="cell" style="grid-column-start:2; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Graphesthesia
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Right
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="graphesthesia.right" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="graphesthesia.right" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="graphesthesia.right" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="graphesthesia.right" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="graphesthesia.right" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="graphesthesia.right" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="graphesthesia.right" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
        </div>
        <!-- Row 25 -->
        <div class="cell" style="grid-column-start:2; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Right:
          <input type="text" v-model="badComment"/>
          /4<br>Left:
          <input type="text" v-model="badComment"/>
          /4
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Left
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="graphesthesia.left" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="graphesthesia.left" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="graphesthesia.left" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="graphesthesia.left" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="graphesthesia.left" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="graphesthesia.left" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="graphesthesia.left" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
        </div>
        <!--
          FIXME A lot of the inputs above are the wrong type!
          They should be negative channel scores only after
          oralTexturalAwareness
        -->
      </div>
    </div>



    <div class="form-section">

    </div>
  </div>
</template>
<script>
// import types from '@/store/evaluation/types'
export default {
  name:"TactilityChannel",
  props: {
    evaluationId: {
      required: true
    }
  },
  data: () => ({
    badComment: "",
    deepPressure: {
        comment: "",
        type: "ChannelScore",
        value: null
    },
    tonicity: {
        comment: "",
        type: "ChannelScore",
        face: null,
        neck: null,
        trunk: null,
        shoulderRight: null,
        shoulderLeft: null,
        armRight: null,
        armLeft: null,
        handRight: null,
        handLeft: null,
        hipRight: null,
        hipLeft: null,
        legRight: null,
        legLeft: null,
        footRight: null,
        footLeft: null
    },
    deepPainReaction: {
        comment: "",
        type: "ChannelScore",
        value: null
    },
    surfaceTouch: {
        comment: "",
        type: "ChannelScore",
        handRight: null,
        handLeft: null,
        footRight: null,
        footLeft: null
    },
    surfacePainReaction: {
        comment: "",
        type: "ChannelScore",
        value: null
    },
    olfactoryStimulation: {
        comment: "",
        type: "ChannelScore",
        strong: null,
        sweet: null
    },
    facialSurfaceAwareness: {
        comment: "",
        type: "ChannelScore",
        value: null
    },
    oralTexturalAwareness: {
        comment: "",
        type: "ChannelScore",
        mushy: null,
        crunchy: null
    },
    pageDiscrimination: {
        comment: "",
        type: "NegativeChannelScore",
        cardboard: null,
        paper: null
    },
    tactileDiscriminationMedium: {
        comment: "",
        type: "NegativeChannelScore",
        visual: null,
        nonvisual: null
    },
    tactileDiscriminationSmall: {
        comment: "",
        type: "NegativeChannelScore",
        visual: null,
        nonvisual: null
    },
    rhomberg: {
        comment: "",
        type: "NegativeChannelScore",
        eyesOpen: null,
        eyesClosed: null
    },
    mannsRightFoot: {
        comment: "",
        type: "NegativeChannelScore",
        eyesOpen: null,
        eyesClosed: null
    },
    mannsLeftFoot: {
        comment: "",
        type: "NegativeChannelScore",
        eyesOpen: null,
        eyesClosed: null
    },
    armMatching: {
        comment: "",
        type: "NegativeChannelScore",
        front: null,
        above: null,
        sides: null
    },
    graphesthesia: {
        comment: "",
        type: "NegativeChannelScore",
        right: null,
        left: null
    }
  }),
  methods: {
    save () {
      this.$store.saveSection({section:"tactility", data: this.$data})
    }
  },
  created () {
    // reach out to the db and get the current section stuff
  }
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
