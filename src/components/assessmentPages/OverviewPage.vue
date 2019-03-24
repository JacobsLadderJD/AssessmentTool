<template>
  <div class="form-page">

    <h1 class="title" style="text-align:left">Channel Totals</h1>
    <!-- page 2 section 1 -->
    <div class="form-section">
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>RAW SCORE</th>
            <th>TOTAL POINTS</th>
            <th>PERCENTAGE</th>
            <th>WORKING LEVEL</th>
            <th>AGE EQUIVALENCE</th>
          </tr>
          <tr>
            <td><strong>INPUT</strong></td>
          </tr>
          <!-- tactility row -->
          <tr>
            <td style="text-align:right">Tactility</td>
            <td>
              <input id="tactility-raw-score" type="text"
                name="tactilityRawScore"
                v-model="tactilityRawScore"/>
            </td>
            <td>/ 132</td>
            <td></td>
            <td>N/A</td>
            <td>N/A</td>
          </tr>
          <!-- auditory row -->
          <tr>
            <td style="text-align:right">Auditory</td>
            <td>
              <input id="auditory-raw-score" type="text" name="auditoryRawScore"
                v-model="auditoryRawScore"/>
            </td>
            <td>/ 42</td>
            <td></td>
            <td>
              <input id="auditory-working-level" type="text" name="auditoryWorkingLevel"
                v-model="auditoryWorkingLevel"/>
            </td>
            <td>
              <input id="auditory-age-equivalence" type="text"
                name="auditoryAgeEquivalence"
                v-model="auditoryAgeEquivalence"/>
            </td>
          </tr>
          <!-- visual row -->
          <tr>
            <td style="text-align:right">Visual</td>
            <td>
              <input id="visual-raw-score" type="text" name="visualRawScore" v-model="visualRawScore"/>
            </td>
            <td>/ 54</td>
            <td></td>
            <td>
              <input id="visual-working-level" type="text" name="visualWorkingLevel" v-model="visualWorkingLevel"/>
            </td>
            <td>
              <input id="visual-age-equivalence" type="text" name="visualAgeEquivalence" v-model="visualAgeEquivalence"/>
            </td>
          </tr>
          <tr>
            <td><strong>OUTPUT</strong></td>
          </tr>
          <!-- manual row -->
          <tr>
            <td style="text-align:right">Manual</td>
            <td>
              <input id="manual-raw-score" type="text" name="manualRawScore" v-model="manualRawScore"/>
            </td>
            <td>/ 90</td>
            <td></td>
            <td>
              <input id="manual-working-level" type="text" name="manualWorkingLevel" v-model="manualWorkingLevel"/>
            </td>
            <td>
              <input id="manual-age-equivalence" type="text" name="manualAgeEquivalence" v-model="manualAgeEquivalence"/>
            </td>
          </tr>
          <!-- language row -->
          <tr>
            <td style="text-align:right">Language</td>
            <td>
              <input id="language-raw-score" type="text" name="languageRawScore" v-model="languageRawScore"/>
            </td>
            <td>/ 69</td>
            <td></td>
            <td>
              <input id="language-working-level" type="text" name="languageWorkingLevel" v-model="languageWorkingLevel"/>
            </td>
            <td>
              <input id="language-age-equivalence" type="text" name="languageAgeEquivalence" v-model="languageAgeEquivalence"/>
            </td>
          </tr>
          <!-- mobility row -->
          <tr>
            <td style="text-align:right">Mobility</td>
            <td>
              <input id="mobility-raw-score" type="text" name="mobilityRawScore" v-model="mobilityRawScore"/>
            </td>
            <td>/ 108</td>
            <td></td>
            <td>
              <input id="mobility-working-level" type="text" name="mobilityWorkingLevel" v-model="mobilityWorkingLevel"/>
            </td>
            <td>
              <input id="mobility-age-equivalence" type="text" name="mobilityAgeEquivalence" v-model="mobilityAgeEquivalence"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- page 2 section 2 -->
    <div class="form-section">
      <h1 class="title" style="text-align:left">Dominance</h1>
      <table>
        <tbody>
          <tr>
            <th>DOMINANCE PROFILE</th>
          </tr>
          <tr>
            <td style="text-align:right">Hand</td>
            <td>
              <input id="hand-dominance" type="text" name="handDominance" v-model="handDominance"/>
            </td>
            <td>Foot</td>
            <td>
              <input id="foot-dominance" type="text" name="footDominance" v-model="footDominance"/>
            </td>
            <td>Eye</td>
            <td>
              <input id="eye-dominance" type="text" name="eyeDominance" v-model="eyeDominance"/>
            </td>
            <td>Ear</td>
            <td>
              <input id="ear-dominance" type="text" name="earDominance" v-model="earDominance"/>
            </td>
          </tr>
          <tr>
            <th>HEMISPHERIC PROFILE</th>
          </tr>
          <tr>
            <td style="text-align:right">Logic</td>
            <td>
              <input id="logic-hemispheric" type="text" name="logicHemispheric" v-model="logicHemispheric"/>
            </td>
            <td>Gestalt</td>
            <td>
              <input id="gestalt-hemispheric" type="text" name="gestaltHemispheric" v-model="gestaltHemispheric"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- page 2 section 3 -->
    <div class="form-section">
      <h1 class="title" style="text-align:left">Processing</h1>
      <table>
        <tbody>
          <tr>
            <th>WORKING AMOUNT</th>
          </tr>
          <tr>
            <td>Auditory</td>
            <td>
              <input id="auditory-working-amount" type="text" name="auditoryWorkingAmount" v-model="auditoryWorkingAmount"/>
            </td>
            <td>Visual</td>
            <td>
              <input id="visual-working-amount" type="text" name="visualWorkingAmount" v-model="visualWorkingAmount"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- page 2 section 4 -->
    <div class="form-section">
      <h1 class="title" style="text-align:left">Reflexes</h1>
      <table>
        <tbody>
          <tr>
            <td>Not Able to Access</td>
            <td>
              <input id="reflexes-not-accessible" type="text"
                name="reflexesNotAccessible"
                v-model="reflexesNotAccessible"/>
            </td>
            <td>Not Integrated</td>
            <td>
              <input id="reflexes-not-integrated" type="text"
                name="reflexesNotIntegrated"
                v-model="reflexesNotIntegrated"/>
            </td>
            <td>Integrated</td>
            <td>
              <input id="reflexes-integrated" type="text"
                name="reflexesIntegrated"
                v-model="reflexesIntegrated"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- page2 section 5
    <div class="form-section">
      <h1 class="title" style="text-align:left">Channel Analysis</h1>
      <p>Not sure how to do these sliders yet :/</p>
    </div>
    -->

    <div class="form-section">
      <h1 class="title" style="text-align:left">Dynamics</h1>

      <div class="grid1">
        <!-- Row 1 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center;">
          Low<br>Priority
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center;">
          High<br>Priority
        </div>
        <!-- Row 2 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; font-size:1.2em; padding-right: 2em;">
          <strong>Neurodevelopmental</strong>
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1;">
          <input v-model="neurodevelopmentalDynamic" type="radio" value="Low Priority">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; padding-right:1.3em;">
          <input v-model="neurodevelopmentalDynamic" type="radio" value="Mid-low Priority">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1;">
          <input v-model="neurodevelopmentalDynamic" type="radio" value="Mid-high Priority">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1;">
          <input v-model="neurodevelopmentalDynamic" type="radio" value="High Priority">
        </div>
        <!-- Row 3 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; font-size:1.2em; padding-right: 2em;">
          <strong>Physiology</strong>
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1;">
          <input v-model="physiologicalDynamic" type="radio" value="Low Priority">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; padding-right:1.3em;">
          <input v-model="physiologicalDynamic" type="radio" value="Mid-low Priority">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1;">
          <input v-model="physiologicalDynamic" type="radio" value="Mid-high Priority">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1;">
          <input v-model="physiologicalDynamic" type="radio" value="High Priority">
        </div>
        <!-- row 4 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; font-size:1.2em; padding-right: 2em;">
          <strong>Learning Style</strong>
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1;">
          <input v-model="learningStyleDynamic" type="radio" value="Low Priority">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; padding-right:1.3em;">
          <input v-model="learningStyleDynamic" type="radio" value="Mid-low Priority">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1;">
          <input v-model="learningStyleDynamic" type="radio" value="Mid-high Priority">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1;">
          <input v-model="learningStyleDynamic" type="radio" value="High Priority">
        </div>
      </div>
    </div>

    <div class="form-section">
      <h1 class="title" style="text-align:left">Additional Testing</h1>

      <div class="grid2">
        <!-- Row 1 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1;">
          Standard Score
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1;">
          Grade Equivalent
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1;">
          Full Potential
        </div>
        <!-- Row 2 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1;">
          <strong>Spelling</strong>
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1;">
          <input id="spelling-standard-score" type="text"
            name="spelling-standard-score"
            v-model="spellingStandardScore"/>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1;">
          <input id="spelling-grade-equivalent" type="text"
            name="spelling-grade-equivalent"
            v-model="spellingGradeEquivalent"/>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1;">
          <input id="spelling-full-potential" type="text"
            name="spelling-full-potential"
            v-model="spellingFullPotential"/>
        </div>
        <!-- Row 3 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1;">
          <strong>Word Reading</strong>
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1;">
          <input id="word-reading-standard-score" type="text"
            name="word-reading-standard-score"
            v-model="wordReadingStandardScore"/>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1;">
          <input id="word-reading-grade-equivalent" type="text"
            name="word-reading-grade-equivalent"
            v-model="wordReadingGradeEquivalent"/>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1;">
          <input id="word-reading-full-potential" type="text"
            name="word-reading-full-potential"
            v-model="wordReadingFullPotential"/>
        </div>
        <!-- Row 4 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center;">
          <strong>Listening Sentence Comprehension</strong>
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1;">
          <input id="listening-sentence-comprehension-standard-score" type="text"
            name="listening-sentence-comprehension-standard-score"
            v-model="listeningSentenceComprehensionStandardScore"/>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1;">
          <input id="listening-sentence-comprehension-grade-equivalent" type="text"
            name="listening-sentence-comprehension-grade-equivalent"
            v-model="listeningSentenceComprehensionGradeEquivalent"/>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1;">
          <input id="listening-sentence-comprehension-full-potential" type="text"
            name="listening-sentence-comprehension-full-potential"
            v-model="listeningSentenceComprehensionFullPotential"/>
        </div>
        <!-- Row 5 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center;">
          <strong>Reading Sentence Comprehension</strong>
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1;">
          <input id="reading-sentence-comprehension-standard-score" type="text"
            name="reading-sentence-comprehension-standard-score"
            v-model="readingSentenceComprehensionStandardScore"/>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1;">
          <input id="reading-sentence-comprehension-grade-equivalent" type="text"
            name="reading-sentence-comprehension-grade-equivalent"
            v-model="readingSentenceComprehensionGradeEquivalent"/>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1;">
          <input id="reading-sentence-comprehension-full-potential" type="text"
            name="reading-sentence-comprehension-full-potential"
            v-model="readingSentenceComprehensionFullPotential"/>
        </div>
        <!-- Row 6 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center;">
          <strong>Math Computation</strong>
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1;">
          <input id="math-computation-standard-score" type="text"
            name="math-computation-standard-score"
            v-model="mathComputationStandardScore"/>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1;">
          <input id="math-computation-grade-equivalent" type="text"
            name="math-computation-grade-equivalent"
            v-model="mathComputationGradeEquivalent"/>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1;">
          <input id="reading-sentence-comprehension-full-potential" type="text"
            name="reading-sentence-comprehension-full-potential"
            v-model="mathComputationFullPotential"/>
        </div>
        <!-- Row 7 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center;">
          <strong>Reading Comprehension with Visual Cue</strong>
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1;">
          <input id="reading-comprehension-visual-cue-standard-score" type="text"
            name="reading-comprehension-visual-cue-standard-score"
            v-model="readingComprehensionVisualCueStandardScore"/>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1;">
          <input id="math-computation-grade-equivalent" type="text"
            name="math-computation-grade-equivalent"
            v-model="readingComprehensionVisualCueGradeEquivalent"/>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1;">
          <input id="reading-sentence-comprehension-full-potential" type="text"
            name="reading-sentence-comprehension-full-potential"
            v-model="readingComprehensionVisualCueFullPotential"/>
        </div>
      </div>
    </div>

    <div class="form-section">
      <h1 class="title" style="text-align:left">Sensory Processing Totals</h1>
      <div class="grid3">
        <!-- Row 1 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1;">
          Raw Score
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1;">
          Total Points
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1;">
          Percentage
        </div>
        <!-- Row 2 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1;">
          SENSORY SEEKING
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1;">

        </div>
        <!-- Row 3 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1;">
          Tactility
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1;">
          <input id="tactility-sense-processing-raw-score" type="text"
            name="tactility-sense-processing-raw-score"
            v-model="tactilitySenseProcessingRawScore"/>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1;">
          / 27
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1;">

        </div>
        <!-- Row 4 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1;">
          Auditory
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1;">
          <input id="auditory-sense-processing-raw-score" type="text"
            name="auditory-sense-processing-raw-score"
            v-model="auditorySenseProcessingRawScore"/>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1;">
          / 27
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1;">

        </div>
        <!-- Row 5 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1;">
          Visual
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1;">
          <input id="visual-sense-processing-raw-score" type="text"
            name="visual-sense-processing-raw-score"
            v-model="visualSenseProcessingRawScore"/>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1;">
          / 21
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1;">

        </div>
        <!-- Row 6 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1;">
          SENSORY PROCESSING
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1;">

        </div>
        <!-- Row 7 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1;">
          Sensitivities
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1;">
          <input id="sensitivities-raw-score" type="text"
            name="sensitivities-raw-score"
            v-model="sensitivitiesRawScore"/>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1;">
          / 36
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1;">

        </div>
      </div>
    </div>

    <div class="form-section">
      <h1 class="title" style="text-align:left">Sensory Processing Analysis</h1>
      Need sliders for this
    </div>
  </div>
</template>
<script>
import FormNav from '@/components/FormNav'
import types from '@/store/evaluation/types'
import OverviewPage from '@/components/assessmentPages/OverviewPage'
export default {
  name:"EvaluationViewer",
  components: {
    FormNav,
    OverviewPage,
  },
  data:() => ({
    tactilityRawScore: "",
    auditoryRawScore: "",
    auditoryWorkingLevel: "",
    auditoryAgeEquivalence: "",
    visualRawScore: "",
    visualWorkingLevel: "",
    visualAgeEquivalence: "",
    manualRawScore: "",
    manualWorkingLevel: "",
    manualAgeEquivalence: "",
    languageRawScore: "",
    languageWorkingLevel: "",
    languageAgeEquivalence: "",
    mobilityRawScore: "",
    mobilityWorkingLevel: "",
    mobilityAgeEquivalence: "",
    handDominance: "",
    footDominance: "",
    eyeDominance: "",
    earDominance: "",
    logicHemispheric: "",
    gestaltHemispheric: "",
    auditoryWorkingAmount: "",
    visualWorkingAmount: "",
    reflexesNotAccessible:"",
    reflexesNotIntegrated: "",
    reflexesIntegrated: "",
    neurodevelopmentalDynamic: "",
    physiologicalDynamic: "",
    learningStyleDynamic: "",
    spellingStandardScore: "",
    spellingGradeEquivalent: "",
    spellingFullPotential: "",
    wordReadingStandardScore: "",
    wordReadingGradeEquivalent: "",
    wordReadingFullPotential: "",
    listeningSentenceComprehensionStandardScore: "",
    listeningSentenceComprehensionGradeEquivalent: "",
    listeningSentenceComprehensionFullPotential: "",
    readingSentenceComprehensionStandardScore: "",
    readingSentenceComprehensionGradeEquivalent: "",
    readingSentenceComprehensionFullPotential: "",
    mathComputationStandardScore: "",
    mathComputationFullPotential: "",
    mathComputationGradeEquivalent: "",
    readingComprehensionVisualCueStandardScore: "",
    readingComprehensionVisualCueGradeEquivalent: "",
    readingComprehensionVisualCueFullPotential: "",
    tactilitySenseProcessingRawScore: "",
    auditorySenseProcessingRawScore: "",
    visualSenseProcessingRawScore: "",
    sensitivitiesRawScore: "",
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

.cell {
  white-space: normal;
  word-wrap: normal;
}
</style>
