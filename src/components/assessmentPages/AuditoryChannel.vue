<template>
  <div class="form-page">
    <div class="form-section">
      <div class="grid8">
        <!-- Row 1 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          AUDITORY CHANNEL
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
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          LEVEL II
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 2; grid-row-start: 2; grid-row-end: span 1; text-align: left; justify-self: left;">
          Vestibular Function
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: Right; justify-self: end; align-self: end;">
          Right
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rightVestibularFunction" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rightVestibularFunction" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rightVestibularFunction" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rightVestibularFunction" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rightVestibularFunction" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rightVestibularFunction" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rightVestibularFunction" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rightVestibularFunction" type="radio" value="NA">
        </div>
        <!-- Row 3 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 2; grid-row-start: 3; grid-row-end: span 1; text-align: left; justify-self: left;">
          Right:
          <input type="text" v-model="rightSecondsNystagmus"/>
          seconds of nystagmus
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: Right; justify-self: end; align-self: end;">
          Left
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="leftVestibularFunction" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="leftVestibularFunction" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="leftVestibularFunction" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="leftVestibularFunction" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="leftVestibularFunction" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="leftVestibularFunction" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="leftVestibularFunction" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="leftVestibularFunction" type="radio" value="NA">
        </div>
        <!-- Row 4 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 2; grid-row-start: 4; grid-row-end: span 1; text-align: left; justify-self: left;">
          Left:
          <input type="text" v-model="leftSecondsNystagmus"/>
          seconds of nystagmus
        </div>
        <!-- Row 5 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          LEVEL III
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 2; grid-row-start: 5; grid-row-end: span 1; text-align: left; justify-self: left;">
          Reaction to Threatening Sounds
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="reactionToThreateningSounds" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="reactionToThreateningSounds" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="reactionToThreateningSounds" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="reactionToThreateningSounds" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="reactionToThreateningSounds" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="reactionToThreateningSounds" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="reactionToThreateningSounds" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="reactionToThreateningSounds" type="radio" value="NA">
        </div>
        <!-- Row 6 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 6; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="reactionToThreateningSoundsNotes"></textarea>
        </div>
        <!-- Row 7 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 2; grid-row-start: 7; grid-row-end: span 1; text-align: left; justify-self: left;">
          Sensitivity to Sound
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="sensitivityToSound" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="sensitivityToSound" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="sensitivityToSound" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="sensitivityToSound" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="sensitivityToSound" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="sensitivityToSound" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="sensitivityToSound" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="sensitivityToSound" type="radio" value="NA">
        </div>
        <!-- Row 8 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 8; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="sensitivityToSoundNotes"></textarea>
        </div>
        <!-- Row 9 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          LEVEL IV
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 2; grid-row-start: 9; grid-row-end: span 1; text-align: left; justify-self: left;">
          Reaction to Change in Tonality
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="reactionToChangeInTonality" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="reactionToChangeInTonality" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="reactionToChangeInTonality" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="reactionToChangeInTonality" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="reactionToChangeInTonality" type="radio" value="+1">
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="reactionToChangeInTonality" type="radio" value="+2">
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="reactionToChangeInTonality" type="radio" value="+3">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="reactionToChangeInTonality" type="radio" value="NA">
        </div>
        <!-- Row 10 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 10; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="reactionToChangeInTonalityNotes"></textarea>
        </div>
        <!-- Row 11 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          LEVEL V
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 2; grid-row-start: 11; grid-row-end: span 1; text-align: left; justify-self: left;">
          Initial Receptive Words
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="initialReceptiveWords" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="initialReceptiveWords" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="initialReceptiveWords" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="initialReceptiveWords" type="radio" value="0">
        </div>
        <!-- Row 12 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 12; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="knownWords" placeholder="Known Words">Known Words</textarea>
        </div>
        <!-- Row 13 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          LEVEL VI
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 2; grid-row-start: 13; grid-row-end: span 1; text-align: left; justify-self: left;">
          Follows One-Step Directions
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsOneStepDirections" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsOneStepDirections" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsOneStepDirections" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsOneStepDirections" type="radio" value="0">
        </div>
        <!-- Row 14 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 8; grid-row-start: 14; grid-row-end: span 1; justify-self: start;">
          <div class="row">
            <div class="cell">
              <div class="column" style="margin-right:20px;">
                <div class="cell" style="align-items: start; justify-items: start;">
                  <div style="justify-self: start; align-self: start;">
                    Touch your tummy
                  </div>
                  <textarea v-model="touchYourTummy" style="align-self:start; justify-self:start;"></textarea>
                </div>
                <div class="cell">
                  <div style="justify-self: start; align-self:start;">
                    Open your mouth
                  </div>
                  <textarea v-model="openYourMouth" style="align-self:start; justify-self:start;"></textarea>
                </div>
                <div class="cell">
                  <div style="justify-self: start; align-self:start;">
                    Touch your nose
                  </div>
                  <textarea v-model="touchYourNose" style="align-self:start; justify-self:start;"></textarea>
                </div>
                <div class="cell">
                  <div style="justify-self: start; align-self:start;">
                    Wave goodbye
                  </div>
                  <textarea v-model="waveGoodbye" style="align-self:start; justify-self:start;"></textarea>
                </div>
                <div class="cell">
                  <div style="justify-self: start; align-self:start;">
                    Put arms up
                  </div>
                  <textarea v-model="putArmsUp" style="align-self:start; justify-self:start;"></textarea>
                </div>
              </div>
            </div>
            <div class="cell">
              <div class="column">
                <div class="cell">
                  <div style="justify-self: start; align-self:start;">
                    Cover your eyes
                  </div>
                  <textarea v-model="coverYourEyes" style="align-self:start; justify-self:start;"></textarea>
                </div>
                <div class="cell">
                  <div style="justify-self: start; align-self:start;">
                    Give me five
                  </div>
                  <textarea v-model="giveMeFive" style="align-self:start; justify-self:start;"></textarea>
                </div>
                <div class="cell">
                  <div style="justify-self: start; align-self:start;">
                    Tap the table
                  </div>
                  <textarea v-model="tapTheTable" style="align-self:start; justify-self:start;"></textarea>
                </div>
                <div class="cell">
                  <div style="justify-self: start; align-self:start;">
                    Blow a kiss
                  </div>
                  <textarea v-model="blowAKiss" style="align-self:start; justify-self:start;"></textarea>
                </div>
                <div class="cell">
                  <div style="justify-self: start; align-self:start;">
                    Clap your hands
                  </div>
                  <textarea v-model="clapYourHands" style="align-self:start; justify-self:start;"></textarea>
                </div>
              </div>
            </div>
            <div class="cell" style="align-items:center; justify-items:end; align-self:center; justify-self; end; margin-left:6vw;">
              <input v-model="followsOneStepDirectionsTotal" type="text">/10
            </div>
          </div>
        </div>
        <!-- Row 15 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 2; grid-row-start: 15; grid-row-end: span 1; text-align: left; justify-self: left;">
          Understands 2-4 Word Phrases
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="understands24WordPhrases" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="understands24WordPhrases" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="understands24WordPhrases" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="understands24WordPhrases" type="radio" value="0">
        </div>
        <!-- Row 16 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 8; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <div class="column">
            <div class="cell">
              <div class="row">
                <div class="cell">
                  1<input v-model="followsOneStepDirectionsTotal" type="text">(C)
                </div>
                <div class="cell">
                  3<input v-model="followsOneStepDirectionsTotal" type="text">(B)
                </div>
                <div class="cell">
                  5<input v-model="followsOneStepDirectionsTotal" type="text">(C)
                </div>
                <div class="cell">
                  7<input v-model="followsOneStepDirectionsTotal" type="text">(B)
                </div>
                <div class="cell">
                  9<input v-model="followsOneStepDirectionsTotal" type="text">(C)
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Row 17 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 8; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
          <div class="column">
            <div class="cell">
              <div class="row">
                <div class="cell">
                  2<input v-model="followsOneStepDirectionsTotal" type="text">(A)
                </div>
                <div class="cell">
                  4<input v-model="followsOneStepDirectionsTotal" type="text">(B)
                </div>
                <div class="cell">
                  6<input v-model="followsOneStepDirectionsTotal" type="text">(A)
                </div>
                <div class="cell">
                  8<input v-model="followsOneStepDirectionsTotal" type="text">(A)
                </div>
                <div class="cell">
                  10<input v-model="followsOneStepDirectionsTotal" type="text">(C)
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Row 18 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          LEVEL VII
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 2; grid-row-start: 18; grid-row-end: span 1; text-align: left; justify-self: left;">
          Follows Two-Step Directions
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsTwoStepDirections" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsTwoStepDirections" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsTwoStepDirections" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsTwoStepDirections" type="radio" value="0">
        </div>
        <!-- Row 19 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 8; grid-row-start: 19; grid-row-end: span 1; justify-self: start;">
          <div class="row">
            <div class="cell">
              <div class="column" style="margin-right:20px;">
                <div class="cell" style="align-items: start; justify-items: start;">
                  <div style="justify-self: start; align-self: start;">
                    Blow a kiss - give me five
                  </div>
                  <textarea v-model="blowAKissGiveMeFive" style="align-self:start; justify-self:start;"></textarea>
                </div>
                <div class="cell">
                  <div style="justify-self: start; align-self:start;">
                    Open your mouth - touch your ears
                  </div>
                  <textarea v-model="openMouthTouchEars" style="align-self:start; justify-self:start;"></textarea>
                </div>
                <div class="cell">
                  <div style="justify-self: start; align-self:start;">
                    Kick your feet - nod your head
                  </div>
                  <textarea v-model="kickFeetNodHead" style="align-self:start; justify-self:start;"></textarea>
                </div>
                <div class="cell">
                  <div style="justify-self: start; align-self:start;">
                    Touch your hair - cover your eyes
                  </div>
                  <textarea v-model="touchHairCoverEyes" style="align-self:start; justify-self:start;"></textarea>
                </div>
                <div class="cell">
                  <div style="justify-self: start; align-self:start;">
                    Look up - shake my hand
                  </div>
                  <textarea v-model="lookUpShakeHand" style="align-self:start; justify-self:start;"></textarea>
                </div>
              </div>
            </div>
            <div class="cell">
              <div class="column">
                <div class="cell">
                  <div style="justify-self: start; align-self:start;">
                    Swing your arms - wiggle your fingers
                  </div>
                  <textarea v-model="swingArmsWiggleFingers" style="align-self:start; justify-self:start;"></textarea>
                </div>
                <div class="cell">
                  <div style="justify-self: start; align-self:start;">
                    Clap your hands - look down
                  </div>
                  <textarea v-model="clapHandsLookDown" style="align-self:start; justify-self:start;"></textarea>
                </div>
                <div class="cell">
                  <div style="justify-self: start; align-self:start;">
                    Tap the table - pat your head
                  </div>
                  <textarea v-model="tapTablePatHead" style="align-self:start; justify-self:start;"></textarea>
                </div>
                <div class="cell">
                  <div style="justify-self: start; align-self:start;">
                    Tap your legs - cover your eyes
                  </div>
                  <textarea v-model="tapLegsCoverEyes" style="align-self:start; justify-self:start;"></textarea>
                </div>
                <div class="cell">
                  <div style="justify-self: start; align-self:start;">
                    Wave hello - blow a kiss
                  </div>
                  <textarea v-model="waveHellowBlowKiss" style="align-self:start; justify-self:start;"></textarea>
                </div>
              </div>
            </div>
            <div class="cell" style="align-items:center; justify-items:end; align-self:center; justify-self; end; margin-left:6vw;">
              <input v-model="followsTwoStepDirectionsTotal" type="text">/10
            </div>
          </div>
        </div>
        <!-- Row 20 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 2; grid-row-start: 20; grid-row-end: span 1; text-align: left; justify-self: left;">
          Understands 5-8 Word Sentences
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="understands58WordSentences" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="understands58WordSentences" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="understands58WordSentences" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="understands58WordSentences" type="radio" value="0">
        </div>
        <!-- Row 21 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 8; grid-row-start: 21; grid-row-end: span 1; text-align: center; justify-self: center;">
          <div class="column">
            <div class="cell">
              <div class="row">
                <div class="cell">
                  1<input v-model="followsOneStepDirectionsTotal" type="text">(B)
                </div>
                <div class="cell">
                  3<input v-model="followsOneStepDirectionsTotal" type="text">(B)
                </div>
                <div class="cell">
                  5<input v-model="followsOneStepDirectionsTotal" type="text">(A)
                </div>
                <div class="cell">
                  7<input v-model="followsOneStepDirectionsTotal" type="text">(C)
                </div>
                <div class="cell">
                  9<input v-model="followsOneStepDirectionsTotal" type="text">(B)
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Row 22 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 8; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <div class="column">
            <div class="cell">
              <div class="row">
                <div class="cell">
                  2<input v-model="followsOneStepDirectionsTotal" type="text">(A)
                </div>
                <div class="cell">
                  4<input v-model="followsOneStepDirectionsTotal" type="text">(C)
                </div>
                <div class="cell">
                  6<input v-model="followsOneStepDirectionsTotal" type="text">(A)
                </div>
                <div class="cell">
                  8<input v-model="followsOneStepDirectionsTotal" type="text">(C)
                </div>
                <div class="cell">
                  10<input v-model="followsOneStepDirectionsTotal" type="text">(A)
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Row 23 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: left; justify-self: left;">
          Auditory Sequential Processing Speed
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: left; justify-self: left;">
          Line 1
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsTwoStepDirections" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsTwoStepDirections" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsTwoStepDirections" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsTwoStepDirections" type="radio" value="0">
        </div>
        <!-- Row 24 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: left; justify-self: left;">
          <div class="row">
            <div class="cell">
              1 Color the kite red
            </div>
            <div class="cell" style="text-align:right; justify-self:end; justify-items:end; align-self:end; align-items:end; margin-left: 50px;">
              Time:
              <input v-model="followsOneStepDirectionsTotal" type="text">
            </div>
          </div>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: left; justify-self: start;">
          Line 2
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsTwoStepDirections" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsTwoStepDirections" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsTwoStepDirections" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsTwoStepDirections" type="radio" value="0">
        </div>
        <!-- Row 25 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: left; justify-self: left;">
          <div class="row">
            <div class="cell">
              2 Circle the rabbit eating the ice cream
            </div>
            <div class="cell" style="text-align:right; justify-self:end; justify-items:end; align-self:end; align-items:end; margin-left: 50px;">
              Time:
              <input v-model="followsOneStepDirectionsTotal" type="text">
            </div>
          </div>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: left; justify-self: start;">
          Line 3
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsTwoStepDirections" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsTwoStepDirections" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsTwoStepDirections" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsTwoStepDirections" type="radio" value="0">
        </div>
        <!-- row 26 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: left; justify-self: left;">
          <div class="row">
            <div class="cell">
              3 Find the turtle holding the hotdog. Color its spots blue.
            </div>
            <div class="cell" style="text-align:right; justify-self:end; justify-items:end; align-self:end; align-items:end; margin-left: 50px;">
              Time:
              <input v-model="followsOneStepDirectionsTotal" type="text">
            </div>
          </div>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: left; justify-self: start;">
          Line 4
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsTwoStepDirections" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsTwoStepDirections" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsTwoStepDirections" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="followsTwoStepDirections" type="radio" value="0">
        </div>
        <!-- Row 27 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 27; grid-row-end: span 1; text-align: left; justify-self: left;">
          <div class="row">
            <div class="cell">
              4 Find the frog holding three balloons. Color one balloon yellow and two balloons green
            </div>
            <div class="cell" style="text-align:right; justify-self:end; justify-items:end; align-self:end; align-items:end; margin-left: 50px;">
              Time:
              <input v-model="followsOneStepDirectionsTotal" type="text">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormNav from '@/components/FormNav'
import types from '@/store/evaluation/types'
import AuditoryChannel from '@/components/assessmentPages/AuditoryChannel'
export default {
  name:"EvaluationViewer",
  components: {
    FormNav,
    AuditoryChannel,
  },
  data:() => ({
    something: "",
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

.cell {
  white-space: normal;
  word-wrap: normal;
}
</style>
