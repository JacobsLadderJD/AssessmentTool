import axios from 'axios'
import mockApi from '@/fixtures/MockApi'

const MOCK_MODE = true;

axios.defaults.baseURL = 'http://localhost:8000';

function setAuthorization (token) {
  axios.defaults.headers.common['Authorization'] = token
}
function clearAuthorization (token) {
  delete axios.defaults.headers.common['Authorization']
}

const auth = {
  login (email, password) {
    /* Example output
     *{
     *  data: {
     *    token: r9@8$kd9G79aW9?uV
     *  }
     *}
     */
    return axios.post('user/login/', { username: email, password })
  },
  logout (token) { // eslint-disable-line
    // TODO: Figure out example output
    return mockApi.logout(token)
  },
}
const student = {
  searchStudentByNames (name) {
    return mockApi.searchStudentByNames(name)
  }
}

const evaluation = {
  createEvaluation (studentId) {
    /* Example output
     *{
     *  data: {
     *    id: 0,
     *    studentId,
     *    lastEdited: new Date(),
     *    evaluator: "Some User"
     *  }
     *}
     */
    return mockApi.createEvaluation(studentId)
  },
  getEvaluationById (id) {
    return axios.get(`evaluation/${id}`)
  },
  getEvaluations (query) {
    return axios.get('evaluation', query)
  }
}

let api = {
  auth,
  evaluation,
  student
}

if (MOCK_MODE) {
  api = mockApi
}

export default api
