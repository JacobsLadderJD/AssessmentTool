<template lang="html">
  <main style="display: flex">
    <FormNav :items="[]" style="flex: 0 0 200px; margin-right:24px;"/>
    <div class="form-viewer">
      <form class="">
        <div class="form-page" v-if="page===1">
          <h1 class="title">Neurodevelopmental Profile</h1>
          <div class="form-section">
            <div class="row">
              <div class="item" style="margin-bottom: 4vw;">
                <label for="date-input">Date</label>
                <input id="last-edited-input" name="last-edited" type="date"
                v-model="temp.lastEdited"/>
              </div>
              <div class="item" style="margin-bottom: 4vw;">
                <label for="status-input">Status</label>
                <input id="status-input" type="text" name="status" v-model="temp.status"/>
              </div>
            </div>
            <div class="row">
              <div class="item" style="margin-bottom: 4vw;">
                <label for="code-input">Code</label>
                <input id="code-input" type="text" name="code" v-model="temp.code"/>
              </div>
            </div>
          </div>
          <div class="form-section">
            <h2>Student</h2>
            <div class="row">
              <div class="item" style="margin-bottom: 4vw;">
                <label for="name-input">Name</label>
                <input id="first-name-input" type="text" name="firstName"
                  :value="student.firstName" disabled/>
                <input id="last-name-input" type="text" name="lastName"
                :value="student.lastName" disabled/>
              </div>
            </div>
            <div class="row">
              <div class="item" style="margin-bottom: 4vw;">
                <label for="sex-input">Sex</label>
                <select id="sex-input" name="sex">
                  <option value="m">Male</option>
                  <option value="f">Female</option>
                </select>
              </div>
              <div class="item" style="margin-bottom: 4vw;">
                <label for="age-input">Birthdate</label>
                <input id="age-input" type="text" name="birthdate"
                  :value="student.birthday | niceDate" disabled/>
              </div>
            </div>
          </div>
          <div class="form-section">
            <div class="item" style="margin-bottom: 4vw;">
              <label for="evaluators-input">Evaluator(s)</label>
              <input id="evaluators-input" type="text" name="evaluators"
              v-model="temp.evaluator"/>
            </div>
          </div>
          <div class="w3-cell-row">
            <div class="w3-container w3-cell">

            </div>
            <div class="w3-container w3-cell">
              <div class="form-section form-page-nav">
                <button class="btn btn-info" style="font-size: 2vw; padding: 0.5vw;" @click.prevent="nextPage()">Next</button>
              </div>
            </div>
          </div>
        </div>

        <!-- form page 2 -->

        <div class="form-page" v-if="page===2">

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
                      v-model="temp.tactilityRawScore"/>
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
                      v-model="temp.auditoryRawScore"/>
                  </td>
                  <td>/ 42</td>
                  <td></td>
                  <td>
                    <input id="auditory-working-level" type="text" name="auditoryWorkingLevel"
                      v-model="temp.auditoryWorkingLevel"/>
                  </td>
                  <td>
                    <input id="auditory-age-equivalence" type="text"
                      name="auditoryAgeEquivalence"
                      v-model="temp.auditoryAgeEquivalence"/>
                  </td>
                </tr>
                <!-- visual row -->
                <tr>
                  <td style="text-align:right">Visual</td>
                  <td>
                    <input id="visual-raw-score" type="text" name="visualRawScore" v-model="temp.visualRawScore"/>
                  </td>
                  <td>/ 54</td>
                  <td></td>
                  <td>
                    <input id="visual-working-level" type="text" name="visualWorkingLevel" v-model="temp.visualWorkingLevel"/>
                  </td>
                  <td>
                    <input id="visual-age-equivalence" type="text" name="visualAgeEquivalence" v-model="temp.visualAgeEquivalence"/>
                  </td>
                </tr>
                <tr>
                  <td><strong>OUTPUT</strong></td>
                </tr>
                <!-- manual row -->
                <tr>
                  <td style="text-align:right">Manual</td>
                  <td>
                    <input id="manual-raw-score" type="text" name="manualRawScore" v-model="temp.manualRawScore"/>
                  </td>
                  <td>/ 90</td>
                  <td></td>
                  <td>
                    <input id="manual-working-level" type="text" name="manualWorkingLevel" v-model="temp.manualWorkingLevel"/>
                  </td>
                  <td>
                    <input id="manual-age-equivalence" type="text" name="manualAgeEquivalence" v-model="temp.manualAgeEquivalence"/>
                  </td>
                </tr>
                <!-- language row -->
                <tr>
                  <td style="text-align:right">Language</td>
                  <td>
                    <input id="language-raw-score" type="text" name="languageRawScore" v-model="temp.languageRawScore"/>
                  </td>
                  <td>/ 69</td>
                  <td></td>
                  <td>
                    <input id="language-working-level" type="text" name="languageWorkingLevel" v-model="temp.languageWorkingLevel"/>
                  </td>
                  <td>
                    <input id="language-age-equivalence" type="text" name="languageAgeEquivalence" v-model="temp.languageAgeEquivalence"/>
                  </td>
                </tr>
                <!-- mobility row -->
                <tr>
                  <td style="text-align:right">Mobility</td>
                  <td>
                    <input id="mobility-raw-score" type="text" name="mobilityRawScore" v-model="temp.mobilityRawScore"/>
                  </td>
                  <td>/ 108</td>
                  <td></td>
                  <td>
                    <input id="mobility-working-level" type="text" name="mobilityWorkingLevel" v-model="temp.mobilityWorkingLevel"/>
                  </td>
                  <td>
                    <input id="mobility-age-equivalence" type="text" name="mobilityAgeEquivalence" v-model="temp.mobilityAgeEquivalence"/>
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
                    <input id="hand-dominance" type="text" name="handDominance" v-model="temp.handDominance"/>
                  </td>
                  <td>Foot</td>
                  <td>
                    <input id="foot-dominance" type="text" name="footDominance" v-model="temp.footDominance"/>
                  </td>
                  <td>Eye</td>
                  <td>
                    <input id="eye-dominance" type="text" name="eyeDominance" v-model="temp.eyeDominance"/>
                  </td>
                  <td>Ear</td>
                  <td>
                    <input id="ear-dominance" type="text" name="earDominance" v-model="temp.earDominance"/>
                  </td>
                </tr>
                <tr>
                  <th>HEMISPHERIC PROFILE</th>
                </tr>
                <tr>
                  <td style="text-align:right">Logic</td>
                  <td>
                    <input id="logic-hemispheric" type="text" name="logicHemispheric" v-model="temp.logicHemispheric"/>
                  </td>
                  <td>Gestalt</td>
                  <td>
                    <input id="gestalt-hemispheric" type="text" name="gestaltHemispheric" v-model="temp.gestaltHemispheric"/>
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
                    <input id="auditory-working-amount" type="text" name="auditoryWorkingAmount" v-model="temp.auditoryWorkingAmount"/>
                  </td>
                  <td>Visual</td>
                  <td>
                    <input id="visual-working-amount" type="text" name="visualWorkingAmount" v-model="temp.visualWorkingAmount"/>
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
                      v-model="temp.reflexesNotAccessible"/>
                  </td>
                  <td>Not Integrated</td>
                  <td>
                    <input id="reflexes-not-integrated" type="text"
                      name="reflexesNotIntegrated"
                      v-model="temp.reflexesNotIntegrated"/>
                  </td>
                  <td>Integrated</td>
                  <td>
                    <input id="reflexes-integrated" type="text"
                      name="reflexesIntegrated"
                      v-model="temp.reflexesIntegrated"/>
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
          <div class="w3-cell-row">
            <div class="w3-container w3-cell">
              <div class="form-section form-page-nav">
                <button class="btn btn-info" style="font-size: 1.3em; float:left;" @click.prevent="prevPage()">Previous</button>
              </div>
            </div>
            <div class="w3-container w3-cell">
              <div class="form-section form-page-nav">
                <button class="btn btn-info" style="font-size: 1.3em;" @click.prevent="nextPage()">Next</button>
              </div>
            </div>
          </div>
        </div>

        <!-- page 3 -->
        <div class="form-page" v-if="page===3">
          <!-- page 3 section 1 -->

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
                <input v-model="temp.neurodevelopmentalDynamic" type="radio" value="Low Priority">
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; padding-right:1.3em;">
                <input v-model="temp.neurodevelopmentalDynamic" type="radio" value="Mid-low Priority">
              </div>
              <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1;">
                <input v-model="temp.neurodevelopmentalDynamic" type="radio" value="Mid-high Priority">
              </div>
              <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1;">
                <input v-model="temp.neurodevelopmentalDynamic" type="radio" value="High Priority">
              </div>
              <!-- Row 3 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; font-size:1.2em; padding-right: 2em;">
                <strong>Physiology</strong>
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1;">
                <input v-model="temp.physiologicalDynamic" type="radio" value="Low Priority">
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; padding-right:1.3em;">
                <input v-model="temp.physiologicalDynamic" type="radio" value="Mid-low Priority">
              </div>
              <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1;">
                <input v-model="temp.physiologicalDynamic" type="radio" value="Mid-high Priority">
              </div>
              <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1;">
                <input v-model="temp.physiologicalDynamic" type="radio" value="High Priority">
              </div>
              <!-- row 4 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; font-size:1.2em; padding-right: 2em;">
                <strong>Learning Style</strong>
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1;">
                <input v-model="temp.learningStyleDynamic" type="radio" value="Low Priority">
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; padding-right:1.3em;">
                <input v-model="temp.learningStyleDynamic" type="radio" value="Mid-low Priority">
              </div>
              <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1;">
                <input v-model="temp.learningStyleDynamic" type="radio" value="Mid-high Priority">
              </div>
              <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1;">
                <input v-model="temp.learningStyleDynamic" type="radio" value="High Priority">
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
                  v-model="temp.spellingStandardScore"/>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1;">
                <input id="spelling-grade-equivalent" type="text"
                  name="spelling-grade-equivalent"
                  v-model="temp.spellingGradeEquivalent"/>
              </div>
              <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1;">
                <input id="spelling-full-potential" type="text"
                  name="spelling-full-potential"
                  v-model="temp.spellingFullPotential"/>
              </div>
              <!-- Row 3 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1;">
                <strong>Word Reading</strong>
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1;">
                <input id="word-reading-standard-score" type="text"
                  name="word-reading-standard-score"
                  v-model="temp.wordReadingStandardScore"/>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1;">
                <input id="word-reading-grade-equivalent" type="text"
                  name="word-reading-grade-equivalent"
                  v-model="temp.wordReadingGradeEquivalent"/>
              </div>
              <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1;">
                <input id="word-reading-full-potential" type="text"
                  name="word-reading-full-potential"
                  v-model="temp.wordReadingFullPotential"/>
              </div>
              <!-- Row 4 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center;">
                <strong>Listening Sentence Comprehension</strong>
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1;">
                <input id="listening-sentence-comprehension-standard-score" type="text"
                  name="listening-sentence-comprehension-standard-score"
                  v-model="temp.listeningSentenceComprehensionStandardScore"/>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1;">
                <input id="listening-sentence-comprehension-grade-equivalent" type="text"
                  name="listening-sentence-comprehension-grade-equivalent"
                  v-model="temp.listeningSentenceComprehensionGradeEquivalent"/>
              </div>
              <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1;">
                <input id="listening-sentence-comprehension-full-potential" type="text"
                  name="listening-sentence-comprehension-full-potential"
                  v-model="temp.listeningSentenceComprehensionFullPotential"/>
              </div>
              <!-- Row 5 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center;">
                <strong>Reading Sentence Comprehension</strong>
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1;">
                <input id="reading-sentence-comprehension-standard-score" type="text"
                  name="reading-sentence-comprehension-standard-score"
                  v-model="temp.readingSentenceComprehensionStandardScore"/>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1;">
                <input id="reading-sentence-comprehension-grade-equivalent" type="text"
                  name="reading-sentence-comprehension-grade-equivalent"
                  v-model="temp.readingSentenceComprehensionGradeEquivalent"/>
              </div>
              <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1;">
                <input id="reading-sentence-comprehension-full-potential" type="text"
                  name="reading-sentence-comprehension-full-potential"
                  v-model="temp.readingSentenceComprehensionFullPotential"/>
              </div>
              <!-- Row 6 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center;">
                <strong>Math Computation</strong>
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1;">
                <input id="math-computation-standard-score" type="text"
                  name="math-computation-standard-score"
                  v-model="temp.mathComputationStandardScore"/>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1;">
                <input id="math-computation-grade-equivalent" type="text"
                  name="math-computation-grade-equivalent"
                  v-model="temp.mathComputationGradeEquivalent"/>
              </div>
              <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1;">
                <input id="reading-sentence-comprehension-full-potential" type="text"
                  name="reading-sentence-comprehension-full-potential"
                  v-model="temp.mathComputationFullPotential"/>
              </div>
              <!-- Row 7 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center;">
                <strong>Reading Comprehension with Visual Cue</strong>
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1;">
                <input id="reading-comprehension-visual-cue-standard-score" type="text"
                  name="reading-comprehension-visual-cue-standard-score"
                  v-model="temp.readingComprehensionVisualCueStandardScore"/>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1;">
                <input id="math-computation-grade-equivalent" type="text"
                  name="math-computation-grade-equivalent"
                  v-model="temp.readingComprehensionVisualCueGradeEquivalent"/>
              </div>
              <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1;">
                <input id="reading-sentence-comprehension-full-potential" type="text"
                  name="reading-sentence-comprehension-full-potential"
                  v-model="temp.readingComprehensionVisualCueFullPotential"/>
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
                  v-model="temp.tactilitySenseProcessingRawScore"/>
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
                  v-model="temp.auditorySenseProcessingRawScore"/>
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
                  v-model="temp.visualSenseProcessingRawScore"/>
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
                  v-model="temp.sensitivitiesRawScore"/>
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

          <div class="w3-cell-row">
            <div class="w3-container w3-cell">
              <div class="form-section form-page-nav">
                <button class="btn btn-info" style="font-size: 1.3em; float:left;" @click.prevent="prevPage()">Previous</button>
              </div>
            </div>
            <div class="w3-container w3-cell">
              <div class="form-section form-page-nav">
                <button class="btn btn-info" style="font-size: 1.3em;" @click.prevent="nextPage()">Next</button>
              </div>
            </div>
          </div>
        </div>

        <div class="form-page" v-if="page===4">
          <div class="form-section">
            <h1 class="title" style="text-align:left">Dominance</h1>
            <div class="row">
              <div class="item" style="text-align: left;">
                Ear
              </div>
              <div class="item" style="text-align: left;">
                Hand
              </div>
            </div>
            <div class="row">
              <div class="item" style="text-align: left;">
                <textarea v-model="temp.earDominanceDetail"></textarea>
              </div>
              <div class="item" style="text-align: left;">
                <textarea v-model="temp.handDominanceDetail"></textarea>
              </div>
            </div>
            <div class="row">
              <div class="item" style="text-align: left;">
                Eye
              </div>
              <div class="item" style="text-align: left;">
                Foot
              </div>
            </div>
            <div class="row">
              <div class="item" style="text-align: left;">
                <textarea v-model="temp.eyeDominanceDetail"></textarea>
              </div>
              <div class="item" style="text-align: left;">
                <textarea v-model="temp.footDominanceDetail"></textarea>
              </div>
            </div>
          </div>

          <div class="form-section">
            <h1 class="title" style="text-align:left">Processing</h1>
            <div class="row">
              <div class="item">
                Auditory
              </div>
              <div class="item">
                Visual
              </div>
            </div>
            <div class="row">
              <div class="item">
                <textarea v-model="temp.auditoryProcessingDetail"></textarea>
              </div>
              <div class="item">
                <textarea v-model="temp.visualProcessingDetail"></textarea>
              </div>
            </div>
          </div>

          <div class="form-section">
            <h1 class="title" style="text-align:left">Testing Observations</h1>
            <div class="grid4">
              <!-- Row 1 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 3; grid-row-start: 1; grid-row-end: span 1; text-align: left; justify-self: center;">
                General Observations
              </div>
              <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: left;">
                Behavior Observations
              </div>
              <!-- Row 2 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1;">
                Eye Contact
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1;">
                <input type="checkbox" id="eye-contact-bool" v-model="temp.eyeContactBool">
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 4;">
                <textarea v-model="temp.generalTestingObservations"></textarea>
              </div>
              <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 4;">
                <textarea v-model="temp.behaviorTestingObservations"></textarea>
              </div>
              <!-- Row 3 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1;">
                Attention
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1;">
                <input type="checkbox" id="attention-bool" v-model="temp.attentionBool">
              </div>
              <!-- Row 4 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1;">
                Transitions
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1;">
                <input type="checkbox" id="transitions-bool" v-model="temp.tansitionsBool">
              </div>
              <!-- Row 5 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1;">
                Breaks Required
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1;">
                <input type="checkbox" id="breaks-required-bool" v-model="temp.breaksRequiredBool">
              </div>
            </div>
          </div>

          <div class="w3-cell-row">
            <div class="w3-container w3-cell">
              <div class="form-section form-page-nav">
                <button class="btn btn-info" style="font-size: 1.3em; float:left;" @click.prevent="prevPage()">Previous</button>
              </div>
            </div>
            <div class="w3-container w3-cell">
              <div class="form-section form-page-nav">
                <button class="btn btn-info" style="font-size: 1.3em;" @click.prevent="nextPage()">Next</button>
              </div>
            </div>
          </div>
        </div>

        <div class="form-page" v-if="page===5">
          <div class="form-section">
            <div class="grid5">
              <!-- row 1 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: left; justify-self: start;">
                REFLEXES
              </div>
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
                <input type="checkbox" id="moro-reflex-na" v-model="temp.moroReflexNA">
              </div>
              <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
                212
              </div>
              <!-- Row 3 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: right; justify-self: end;">
                Upper
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; justify-self: center;">
                <input v-model="temp.moroReflexUpperIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.moroReflexUpperIntegration" type="radio" value="Integrated">
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
                <input v-model="temp.moroReflexLowerIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.moroReflexLowerIntegration" type="radio" value="Integrated">
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
                <input type="checkbox" id="spinal-galant-reflex-na" v-model="temp.spinalGalantReflexNA">
              </div>
              <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
                213
              </div>
              <!-- Row 6 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: right; justify-self: end;">
                Left
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; justify-self: center;">
                <input v-model="temp.spinalGalantReflexLeftIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.spinalGalantReflexLeftIntegration" type="radio" value="Integrated">
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
                <input v-model="temp.spinalGalantReflexRightIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.spinalGalantReflexRightIntegration" type="radio" value="Integrated">
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
                <input type="checkbox" id="crossed-extensor-reflex-na" v-model="temp.crossedExtensorReflexNA">
              </div>
              <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
                214
              </div>
              <!-- Row 9 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: right; justify-self: end;">
                Left
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; justify-self: center;">
                <input v-model="temp.crossedExtensorReflexLeftIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.crossedExtensorReflexLeftIntegration" type="radio" value="Integrated">
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
                <input v-model="temp.crossedExtensorReflexRightIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.crossedExtensorReflexRightIntegration" type="radio" value="Integrated">
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
                <input type="checkbox" id="spinal-perez-reflex-na" v-model="temp.spinalPerezReflexNA">
              </div>
              <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
                215
              </div>
              <!-- Row 12 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: right; justify-self: end;">
                Left
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; justify-self: center;">
                <input v-model="temp.spinalPerezReflexLeftIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.spinalPerezReflexLeftIntegration" type="radio" value="Integrated">
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
                <input v-model="temp.spinalPerezReflexRightIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.spinalPerezReflexRightIntegration" type="radio" value="Integrated">
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
                <input type="checkbox" id="babinski-reflex-na" v-model="temp.babinskiReflexNA">
              </div>
              <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">
                216
              </div>
              <!-- Row 15 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: right; justify-self: end;">
                Left
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; justify-self: center;">
                <input v-model="temp.babinskiReflexLeftIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.babinskiReflexLeftIntegration" type="radio" value="Integrated">
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
                <input v-model="temp.babinskiReflexRightIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.babinskiReflexRightIntegration" type="radio" value="Integrated">
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
                <input type="checkbox" id="asymmetrical-tonic-neck-reflex-na" v-model="temp.asymmetricalTonicNeckReflexNA">
              </div>
              <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
                217
              </div>
              <!-- Row 18 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: right; justify-self: end;">
                Left
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; justify-self: center;">
                <input v-model="temp.asymmetricalTonicNeckReflexLeftIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.asymmetricalTonicNeckReflexLeftIntegration" type="radio" value="Integrated">
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
                <input v-model="temp.asymmetricalTonicNeckReflexRightIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.asymmetricalTonicNeckReflexRightIntegration" type="radio" value="Integrated">
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
                <input type="checkbox" id="bauer-crawling-reflex-na" v-model="temp.bauerCrawlingReflexNA">
              </div>
              <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">
                218
              </div>
              <!-- Row 21 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: right; justify-self: end;">
                Left
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; justify-self: center;">
                <input v-model="temp.bauerCrawlingReflexLeftIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.bauerCrawlingReflexLeftIntegration" type="radio" value="Integrated">
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
                <input v-model="temp.bauerCrawlingReflexRightIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.bauerCrawlingReflexRightIntegration" type="radio" value="Integrated">
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
                <input type="checkbox" id="babkin-palmomental-reflex-na" v-model="temp.babkinPalmomentalReflexNA">
              </div>
              <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
                219
              </div>
              <!-- Row 24 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: right; justify-self: end;">
                Left
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; justify-self: center;">
                <input v-model="temp.babkinPalmomentalReflexLeftIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.babkinPalmomentalReflexLeftIntegration" type="radio" value="Integrated">
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
                <input v-model="temp.babkinPalmomentalReflexRightIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.babkinPalmomentalReflexRightIntegration" type="radio" value="Integrated">
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
                <input type="checkbox" id="hand-grasping-reflex-na" v-model="temp.handGraspingReflexNA">
              </div>
              <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
                220
              </div>
              <!-- Row 27 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 27; grid-row-end: span 1; text-align: right; justify-self: end;">
                Left
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 27; grid-row-end: span 1; justify-self: center;">
                <input v-model="temp.handGraspingReflexLeftIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 27; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.handGraspinglReflexLeftIntegration" type="radio" value="Integrated">
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
                <input v-model="temp.handGraspingReflexRightIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.handGraspinglReflexRightIntegration" type="radio" value="Integrated">
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
                <input type="checkbox" id="frontal-release-signs-na" v-model="temp.frontalReleaseSignsNA">
              </div>
              <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">
                221
              </div>
              <!-- Row 30 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: right; justify-self: end;">
                Snout
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; justify-self: center;">
                <input v-model="temp.frontalReleaseSignsSnoutIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.frontalReleaseSignsSnoutIntegration" type="radio" value="Integrated">
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
                <input v-model="temp.frontalReleaseSignsSuckingIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.frontalReleaseSignsSuckingIntegration" type="radio" value="Integrated">
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
                <input v-model="temp.frontalReleaseSignsRootingIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.frontalReleaseSignsRootingIntegration" type="radio" value="Integrated">
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
                <input v-model="temp.frontalReleaseSignsGlabellarIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 33; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.frontalReleaseSignsGlabellarIntegration" type="radio" value="Integrated">
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
                <input type="checkbox" id="stepping-reflex-na" v-model="temp.steppingReflexNA">
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
                <input type="checkbox" id="hands-pulling-reflex-na" v-model="temp.handsPullingReflexNA">
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
                <input type="checkbox" id="hands-supporting-reflex-na" v-model="temp.handsSupportingReflexNA">
              </div>
              <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 40; grid-row-end: span 1; text-align: center; justify-self: center;">
                224
              </div>
              <!-- Row 41 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: right; justify-self: end;">
                Left
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; justify-self: center;">
                <input v-model="temp.handsSupportingReflexLeftIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.handsSupportingReflexLeftIntegration" type="radio" value="Integrated">
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
                <input v-model="temp.handsSupportingReflexRightIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 42; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.handsSupportingReflexRightIntegration" type="radio" value="Integrated">
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
                <input type="checkbox" id="landau-reflex-na" v-model="temp.landauReflexNA">
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
                <input type="checkbox" id="symmetrical-tonic-neck-reflex-na" v-model="temp.symmetricalTonicNeckReflexNA">
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
                <input type="checkbox" id="tonic-labyrinthine-reflex-na" v-model="temp.tonicLabyrinthineReflexNA">
              </div>
              <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 49; grid-row-end: span 1; text-align: center; justify-self: center;">
                227
              </div>
              <!-- Row 50 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 50; grid-row-end: span 1; text-align: right; justify-self: end;">
                Forward
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 50; grid-row-end: span 1; justify-self: center;">
                <input v-model="temp.tonicLabyrinthineReflexForwardIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 50; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.tonicLabyrinthineReflexForwardIntegration" type="radio" value="Integrated">
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
                <input v-model="temp.tonicLabyrinthineReflexBackwardIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 51; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.tonicLabyrinthineReflexBackwardIntegration" type="radio" value="Integrated">
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
                <input type="checkbox" id="hand-righting-reflex-na" v-model="temp.handRightingReflexNA">
              </div>
              <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 52; grid-row-end: span 1; text-align: center; justify-self: center;">
                228
              </div>
              <!-- Row 53 -->
              <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 53; grid-row-end: span 1; text-align: right; justify-self: end;">
                Side-to-Side
              </div>
              <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 53; grid-row-end: span 1; justify-self: center;">
                <input v-model="temp.handRightingReflexSideToSideIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 53; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.handRightingReflexSideToSideIntegration" type="radio" value="Integrated">
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
                <input v-model="temp.handRightingReflexFrontToBackIntegration" type="radio" value="Not Integrated">
                <label for="radio">  NI</label>
              </div>
              <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 54; grid-row-end: span 1; text-align: center; justify-self: center;">
                <input v-model="temp.handRightingReflexFrontToBackIntegration" type="radio" value="Integrated">
                <label for="radio">  I</label>
              </div>
              <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 54; grid-row-end: span 1; text-align: center; justify-self: center;">

              </div>
              <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 54; grid-row-end: span 1; text-align: center; justify-self: center;">

              </div>
            </div>
          </div>
        </div>

      </form>
    </div>
  </main>
</template>

<script>
import FormNav from '@/components/FormNav'
import types from '@/store/evaluation/types'
export default {
  name:"EvaluationViewer",
  components: {
    FormNav
  },
  data:() => ({
    page: 1,
    temp: {
      lastEdited: new Date(),
      status: "",
      code: "",
      evaluator: "",
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
      tactilitySenseProcessingPercentage: "",
      auditorySenseProcessingRawScore: "",
      auditorySenseProcessingPercentage: "",
      visualSenseProcessingRawScore: "",
      sensitivitiesRawScore: "",
      earDominanceDetail: "",
      handDominanceDetail: "",
      eyeDominanceDetail: "",
      footDominanceDetail: "",
      auditoryProcessingDetail: "",
      visualProcessingDetail: "",
      eyeContactBool: "",
      attentionBool: "",
      transitionsBool: "",
      breaksRequiredBool: "",
      moroReflexNA: "",
      moroReflexUpperIntegration: "",
      moroReflexLowerIntegration: "",
      spinalGalantReflexNA: "",
      spinalGalantReflexUpperIntegration: "",
      spinalGalantReflexLowerIntegration: "",
      crossedExtensorReflexNA: "",
      crossedExtensorReflexLeftIntegration: "",
      crossedExtensorReflexRightIntegration: "",
      spinalPerezReflexNA: "",
      spinalPerezReflexLeftIntegration: "",
      spinalPerezReflexRightIntegration: "",
      babinskiReflexNA: "",
      babinskiReflexLeftIntegration: "",
      babinskiReflexRightIntegration: "",
      asymmetricalTonicNeckReflexNA: "",
      asymmetricalTonicNeckReflexLeftIntegration: "",
      asymmetricalTonicNeckReflexRightIntegration: "",
      bauerCrawlingReflexNA: "",
      bauerCrawlingReflexLeftIntegration: "",
      bauerCrawlingReflexRightIntegration: "",
      babkinPalmomentalReflexNA: "",
      babkinPalmomentalReflexLeftIntegration: "",
      babkinPalmomentalReflexLeftIntegration: "",
      babkinPalmomentalReflexRightIntegration: "",
      handGraspingReflexNA: "",
      handGraspingReflexLeftIntegration: "",
      handGraspingReflexRightIntegration: "",
      frontalReleaseSignsNA: "",
      frontalReleaseSignsSnoutIntegration: "",
      frontalReleaseSignsSuckingIntegration: "",
      frontalReleaseSignsRootingIntegration: "",
      frontalReleaseSignsGlabellarIntegration: "",
      steppingReflexNA: "",
      handsPullingReflexNA: "",
      handsSupportingReflexNA: "",
      handsSupportingReflexLeftIntegration: "",
      handsSupportingReflexRightIntegration: "",
      landauReflexNA: "",
      symmetricalTonicNeckReflexNA: "",
      tonicLabyrinthineReflexNA: "",
      tonicLabyrinthineReflexForwardIntegration: "",
      tonicLabyrinthineReflexBackwardIntegration: "",
      handRightingReflexNA: "",
      handRightingReflexSideToSideIntegration: "",
      handRightingReflexFrontToBackIntegration: "",

    }
  }),
  methods: {
    nextPage() {
      this.page++;
    },
    prevPage() {
      this.page--;
    },
    submit () {
      this.$store.dispatch(types.UPDATE_EVALUATION, {
        ...this.temp, lastEdited: new Date(this.temp.lastEdited)})
    }
  },
  computed: {
    isNew () {
      return this.$route.params.id === 'new'
    },
    evaluation () {
      return this.$store.getters.getEvaluationById(this.$route.params.id)
    },
    student () {
      return this.$store.getters.getStudentById(this.evaluation.studentId)
    }
  },
  created () {
    this.temp = this.$store.getters.getEvaluationById(this.$route.params.id)
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
  grid-template-rows: [first] auto [second] 1fr [third] 1fr [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr [eighth] 1fr [ninth] 1fr [tenth] 1fr [eleventh] 1fr [twelfth] 1fr [thirteenth] 1fr [fourteenth] 1fr [fifteenth] 1fr [sixteenth] 1fr [seventeenth] 1fr [eighteenth] 1fr [nineteenth] 1fr [twentieth] 1fr [twentyfirst] 1fr [twentysecond] 1fr [twentythird] 1fr [twentyfourth] 1fr [twentyfifth] 1fr [twentysixth] 1fr [twentyseventh] 1fr [twentyeigth] 1fr [twentyninth] 1fr [thirtieth] 1fr [thirtyfirst] 1fr [thirtysecond] 1fr [thirtythird] 1fr [thirtyfourth] 1fr [thirtyfifth] 1fr [thirty sixth] 1fr [thirtyseventh] 1fr [thirtyeigth] 1fr [thirtyninth] 1fr [fortieth] 1fr [fortyfirst] 1fr [fortysecond] 1fr [fortythird] 1fr [fortyfourth] 1fr [fortyfifth] 1fr [fortysixth] 1fr [fortyseventh] 1fr [fortyeigth] 1fr [fortyninth] 1fr [fiftieth] 1fr [fiftyfirst] 1fr [fiftysecond] 1fr [fiftythird] 1fr [fiftyfourth] 1fr [fiftyfifth] 1fr;
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
