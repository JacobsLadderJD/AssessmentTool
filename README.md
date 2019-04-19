# Jacob's Ladder Profile Assessment Tool
A Vue.js based front-end of the new electronic student assessment system at [Jacob's Ladder Center](https://www.jacobsladdercenter.com/) in Roswell, GA.

The back-end code for the api can be found here: [AssessmentAPI](https://github.com/JacobsLadderJD/AssessmentAPI).

## Release notes

## Libraries to know about
- **axios:** An HTTP client with using JavaScript Promises ([docs](https://github.com/axios/axios))
- **Node.js [v9.8]:** A JavaScript-based server which transpiles and runs the client application ([docs](https://nodejs.org/en/))
- **Vue.js [v2.5]:** A component-based JavaScript front-end framework similar to React ([docs](https://vuejs.org/v2/guide/))
  - **Vue CLI [3.1]** A command line interface for setting up and configuring Vue.js apps ([docs](https://cli.vuejs.org/guide/))
  - **vuex:** A redux-style state management system built specifically for Vue ([docs](https://vuex.vuejs.org/))
  - **vue-router:** A single-page application router which handles pages and navigation ([docs](https://router.vuejs.org/))

## Project installation
These installation instructions are designed with UNIX-based systems in mind. Both Mac and Ubuntu will be covered here. Windows installation may vary, but links to external tutorials will be provided where appropriate.

### Installing Node.js
#### 1. Download Node.js
Navigate to the [downloads page](https://nodejs.org/en/download/) for Node.js and download the most recent LTS.
#### 2. Install Node.js
Once you have downloaded Node.js, run the file you have downloaded to begin the installation procedure by running the file.

Test your installation by running the following:
```
$ node --version
```
It should return something higher than v9.0.0.
#### 3. Clone the repository
Clone the code from this repository.
```
$ git clone https://github.com/JacobsLadderJD/AssessmentTool.git
```
Now the "AssessmentTool" folder should appear in the directory where your cloned the project.
#### 4. Install the app dependencies
Enter the root directory of the project and install the required packages.
```
$ cd AssessmentTool
$ npm install
```
Now the application, along with its relevant libraries, should be installed locally.

#### 5. Run the app
The following commands are provided by default in the package.js file for this project.
```
# run in development mode
$ npm run serve

# compile and minify for production
$ npm run build

# lint and fix files
$ npm run lint
```
### Troubleshooting
Based on experience, a few things may cause problems when attempting to install or run the application. These issues are enumerated below.
#### 1. The data in the pages isn't loading
#### 2. Node would not install properly
#### 3. The application won't run
