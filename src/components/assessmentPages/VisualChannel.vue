<template>
  <div class="form-page">
    <div class="form-section">
      <h1 class="title" style="text-align:left">Visual Channel</h1>
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
          Horizontal Tracking
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.trackingHorizontal.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.trackingHorizontal.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.trackingHorizontal.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.trackingHorizontal.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.trackingHorizontal.value" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.trackingHorizontal.value" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.trackingHorizontal.value" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.trackingHorizontal.value" type="radio" value="NA">
        </div>
        <!-- Row 3 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: left; justify-self: start;">
          <textarea v-model="d.trackingHorizontal.comment"></textarea>
          seconds of tracking
        </div>
        <!-- Row 4 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          LEVEL IV
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Convergence
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.convergence.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.convergence.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.convergence.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.convergence.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.convergence.value" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.convergence.value" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.convergence.value" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.convergence.value" type="radio" value="NA">
        </div>
        <!-- Row 5 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: start; justify-items: start; align-items: start;">
          <textarea v-model="d.convergence.comment"></textarea>
        </div>
        <!-- Row 6 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Divergence
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.divergence.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.divergence.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.divergence.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.divergence.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.divergence.value" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.divergence.value" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.divergence.value" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.divergence.value" type="radio" value="NA">
        </div>
        <!-- row 7 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: start; justify-items: start; align-items: start;">
          <textarea v-model="d.divergence.comment"></textarea>
        </div>
        <!-- Row 8 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Tracking Figure 8's - Horizontal
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingHorizontal.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingHorizontal.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingHorizontal.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingHorizontal.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingHorizontal.value" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingHorizontal.value" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingHorizontal.value" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingHorizontal.value" type="radio" value="NA">
        </div>
        <!-- Row 9 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: left; justify-self: start;">
          <textarea v-model="d.eightTrackingHorizontal.comment"></textarea>
        </div>
        <!-- Row 10 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Tracking Figure 8's - Vertical
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingVertical.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingVertical.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingVertical.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingVertical.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingVertical.value" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingVertical.value" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingVertical.value" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingVertical.value" type="radio" value="NA">
        </div>
        <!-- Row 11 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: left; justify-self: start;">
          <textarea v-model="d.eightTrackingVertical.comment"></textarea>
        </div>
        <!-- Row 12 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Tracking Figure 8's - Convergence/Divergence
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingConDiv.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingConDiv.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingConDiv.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingConDiv.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingConDiv.value" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingConDiv.value" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingConDiv.value" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.eightTrackingConDiv.value" type="radio" value="NA">
        </div>
        <!-- Row 13 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: left; justify-self: start;">
          <textarea v-model="d.eightTrackingConDiv.comment"></textarea>
        </div>
        <!-- Row 14 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          LEVEL V
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Do this
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.doThis.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.doThis.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.doThis.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.doThis.value" type="radio" value="0">
        </div>
        <!-- Row 15 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 15; grid-row-end: span 1; text-align: left; justify-self: start;">
          <textarea v-model="d.doThis.comment"></textarea>
        </div>
        <!-- Row 16 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Initial Matching - Colors
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialMatchColors.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialMatchColors.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialMatchColors.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialMatchColors.value" type="radio" value="0">
        </div>
        <!-- Row 17 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 17; grid-row-end: span 1; text-align: left; justify-self: start;">
          <textarea v-model="d.initialMatchColors.comment"></textarea>
        </div>
        <!-- Row 18 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Initial Matching - Shapes
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialMatchShapes.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialMatchShapes.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialMatchShapes.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialMatchShapes.value" type="radio" value="0">
        </div>
        <!-- Row 19 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 19; grid-row-end: span 1; text-align: left; justify-self: start;">
          <textarea v-model="d.initialMatchShapes.comment"></textarea>
        </div>
        <!-- Row 20 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Initial Matching - Pictures
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialMatchPic.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialMatchPic.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialMatchPic.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialMatchPic.value" type="radio" value="0">
        </div>
        <!-- Row 21 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 21; grid-row-end: span 1; text-align: left; justify-self: start;">
          <textarea v-model="d.initialMatchPic.comment"></textarea>
        </div>
        <!-- Row 22 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          LEVEL VI
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Colors
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <div class="row">
            <div class="cell" style="margin-right:10px;">
              FO2
            </div>
            <div class="cell" style="margin-right:10px;">
              FO3
            </div>
            <div class="cell">
              Verbal
            </div>
          </div>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.colors.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.colors.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.colors.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.colors.value" type="radio" value="0">
        </div>
        <!-- Row 23 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 23; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.colors.comment"></textarea>
        </div>
        <!-- Row 24 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Shapes
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <div class="row">
            <!-- TODO: make these selectable checkboxes or something-->
            <div class="cell" style="margin-right:10px;">
              FO2
            </div>
            <div class="cell" style="margin-right:10px;">
              FO3
            </div>
            <div class="cell">
              Verbal
            </div>
          </div>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.shapes.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.shapes.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.shapes.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.shapes.value" type="radio" value="0">
        </div>
        <!-- Row 25 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 25; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.shapes.comment"></textarea>
        </div>
        <!-- Row 26 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Numbers
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <div class="row">
            <div class="cell" style="margin-right:10px;">
              FO2
            </div>
            <div class="cell" style="margin-right:10px;">
              FO3
            </div>
            <div class="cell">
              Verbal
            </div>
          </div>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.numbers.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.numbers.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.numbers.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.numbers.value" type="radio" value="0">
        </div>
        <!-- Row 27 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 27; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.numbers.comment"></textarea>
        </div>
        <!-- Row 28 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          LEVEL VII
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Uppercase Letters
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <div class="row">
            <div class="cell" style="margin-right:10px;">
              FO2
            </div>
            <div class="cell" style="margin-right:10px;">
              FO3
            </div>
            <div class="cell">
              Verbal
            </div>
          </div>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.uppercaseLetters.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.uppercaseLetters.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.uppercaseLetters.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.uppercaseLetters.value" type="radio" value="0">
        </div>
        <!-- Row 29 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 29; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.uppercaseLetters.comment"></textarea>
        </div>
        <!-- Row 30 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Lowercase Letters
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <div class="row">
            <div class="cell" style="margin-right:10px;">
              FO2
            </div>
            <div class="cell" style="margin-right:10px;">
              FO3
            </div>
            <div class="cell">
              Verbal
            </div>
          </div>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.lowercaseLetters.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.lowercaseLetters.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.lowercaseLetters.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.lowercaseLetters.value" type="radio" value="0">
        </div>
        <!-- Row 31 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 31; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.lowercaseLetters.comment"></textarea>
        </div>
        <!-- Row 32 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Initial Sight Words
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <div class="row">
            <div class="cell" style="margin-right:10px;">
              FO2
            </div>
            <div class="cell" style="margin-right:10px;">
              FO3
            </div>
            <div class="cell">
              Verbal
            </div>
          </div>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialSightWords.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialSightWords.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialSightWords.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialSightWords.value" type="radio" value="0">
        </div>
        <!-- Row 33 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 33; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.initialSightWords.comment"></textarea>
        </div>
        <!-- Row 34 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Visual Sequential Processing Speed
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.visualProcessingSpeed.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.visualProcessingSpeed.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.visualProcessingSpeed.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.visualProcessingSpeed.value" type="radio" value="0">
        </div>
        <!-- Row 35 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 35; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.visualProcessingSpeed.comment"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormNav from '@/components/FormNav'
import types from '@/store/evaluation/types'
import VisualChannel from '@/components/assessmentPages/VisualChannel'
export default {
  name:"EvaluationViewer",
  components: {
    FormNav,
    VisualChannel,
  },
  data:() => ({
    d: {
      trackingHorizontal: {
        comment:"",
        type: "ChannelScore",
        value: null
      },
      trackingVertical: {
        comment:"",
        type: "ChannelScore",
        value: null
      },
      convergence: {
        comment:"",
        type: "ChannelScore",
        value: null
      },
      divergence: {
        comment:"",
        type: "ChannelScore",
        value: null
      },
      eightTrackingHorizontal: {
        comment:"",
        type: "ChannelScore",
        value: null
      },
      eightTrackingVertical: {
        comment:"",
        type: "ChannelScore",
        value: null
      },
      eightTrackingConDiv: {
        comment:"",
        type: "ChannelScore",
        value: null
      },
      doThis: {
        comment:"",
        type: "NegativeChannelScore",
        value: null
      },
      initialMatchColors: {
        comment:"",
        type: "NegativeChannelScore",
        value: null
      },
      initialMatchShapes: {
        comment:"",
        type: "NegativeChannelScore",
        value: null
      },
      initialMatchPic: {
        comment:"",
        type: "NegativeChannelScore",
        value: null
      },
      colors: {
        comment:"",
        type: "NegativeChannelScore",
        value: null,
        f02: false,
        f03: false,
        verbal: false
      },
      shapes: {
        comment:"",
        type: "NegativeChannelScore",
        value: null,
        f02: false,
        f03: false,
        verbal: false
      },
      numbers: {
        comment:"",
        type: "NegativeChannelScore",
        value: null,
        f02: false,
        f03: false,
        verbal: false
      },
      uppercaseLetters: {
        comment:"",
        type: "NegativeChannelScore",
        value: null,
        f02: false,
        f03: false,
        verbal: false
      },
      lowercaseLetters: {
        comment:"",
        type: "NegativeChannelScore",
        value: null,
        f02: false,
        f03: false,
        verbal: false
      },

      initialSightWords: {
        comment:"",
        type: "NegativeChannelScore",
        value: null,
        f02: false,
        f03: false,
        verbal: false
      },
      visualProcessingSpeed: {
        comment:"",
        type: "NegativeChannelScore",
        value: null
      }
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
