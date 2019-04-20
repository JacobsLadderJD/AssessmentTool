# Jacob's Ladder Profile Assessment Tool
A Vue.js based front-end of the new electronic student assessment system at [Jacob's Ladder Center](https://www.jacobsladdercenter.com/) in Roswell, GA.

The back-end code for the api can be found here: [AssessmentAPI](https://github.com/JacobsLadderJD/AssessmentAPI).
### Team Members
- Jack Abrams
- Adam Hayward
- Kyra LeRoux
- Joshua Redding
- Noah Waldron

## Release notes
### Version 1.0.0 (04/19/2019)
#### New Features
- Adds evaluation Dashboard so that evaluators can create and view student assessments quickly
- Adds evaluation List page for searching assessments other than those on the Dashboard
- Adds full assessment with data bindings to [AssessmentAPI](https://github.com/JacobsLadderJD/AssessmentAPI) backend
- Adds login screen and logout function
- Adds notifications for login, logout, and form submission

#### Bug Fixes
- Fixes bug where assessment multipart forms could not nest
- Updates assessment styles to allow question changes without breaking the grid
- Fixes bug where search bar on Evaluation List page does not work

#### Known Bugs/Defects
- Evaluation Pages triggers console errors since values are not loaded asynchronously from the API without defaults
- Evaluation List displays out of order instead of by date decending
- Evaluation List search bar does not work on dashboard
- Collaboration with evaluators on assessments is still in infancy

## Libraries to know about
- **axios:** An HTTP client with using JavaScript Promises ([docs](https://github.com/axios/axios))
- **Node.js [v9.8]:** A JavaScript-based server which transpiles and runs the client application ([docs](https://nodejs.org/en/))
- **Vue.js [v2.5]:** A component-based JavaScript front-end framework similar to React ([docs](https://vuejs.org/v2/guide/))
  - **Vue CLI [3.1]** A command line interface for setting up and configuring Vue.js apps ([docs](https://cli.vuejs.org/guide/))
  - **vuex:** A redux-style state management system built specifically for Vue ([docs](https://vuex.vuejs.org/))
  - **vue-notification:** A Vue library which provides components to display notifications ([docs](https://github.com/euvl/vue-notification/)).
  - **vue-router:** A single-page application router which handles pages and navigation ([docs](https://router.vuejs.org/))

## Project installation
These installation instructions are designed with UNIX-based systems in mind. Both Mac and Ubuntu will be covered here. Windows installation may vary, but links to external tutorials will be provided where appropriate.

### Installing Node.js
#### 1. Download Node.js
Navigate to the [downloads page](https://nodejs.org/en/download/) for Node.js and download the most recent LTS.
#### 2. Install Node.js
Once you have downloaded Node.js, run the file you have downloaded to begin the installation procedure by running the file.

Test your installation by running the following:
```shell
$ node --version
```
It should return something higher than v9.0.0.
#### 3. Clone the repository
Clone the code from this repository.
```shell
$ git clone https://github.com/JacobsLadderJD/AssessmentTool.git
```
Now the "AssessmentTool" folder should appear in the directory where your cloned the project.
#### 4. Install the app dependencies
Enter the root directory of the project and install the required packages.
```shell
$ cd AssessmentTool
$ npm install
```
Now the application, along with its relevant libraries, should be installed locally.

#### 5. Run the app
The following commands are provided by default in the package.js file for this project.
```shell
# run in development mode
$ npm run serve

# compile and minify for production
$ npm run build

# lint and fix files
$ npm run lint
```
### Troubleshooting
Based on experience, a few things may cause problems when attempting to install or run the application. These issues are enumerated below.
#### I. The data in the pages isn't loading
###### Make sure the API is running
If data in the pages is not showing up, it may be because the API is not running locally. Please see the [AssessmentAPI documentation]() and ensure that you have it configured and running properly.
###### Make sure the database is populated
Through the Admin Panel, add at least one user, evaluator, evaluation, and student so that the application has data to show.

#### II. Node would not install properly

#### III. The application won't run
