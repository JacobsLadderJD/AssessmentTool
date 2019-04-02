import axios from 'axios'
import mockApi from '@/fixtures/MockApi'

const MOCK_MODE = false;

axios.defaults.baseURL = 'http://localhost:8000'

if (localStorage.accessToken) {
  setAuthorization(localStorage.accessToken)
}

function setAuthorization (token) {
  axios.defaults.headers.common['Authorization'] = "Token " + token
}
function clearAuthorization () {
  delete axios.defaults.headers.common['Authorization']
}

const auth = {
  test () {
    return axios.defaults.headers.common['Authorization']
  },
  setToken (token) {
    axios.defaults.headers.common['Authorization'] = "Token " + token
  },
  deleteToken () {

  },
  validate () {
    return axios.get('authenticated/')
      .then(resp => {
        return true
      })
      .catch(err => {
        clearAuthorization()
        return false
      })
  },
  login (email, password) {
    /* Example output
     *{
     *  data: {
     *    token: r9@8$kd9G79aW9?uV
     *  }
     *}
     */
    const out =
      axios.post('user/login/', { username: email, password }).then(resp => {
        setAuthorization(resp.data.token)
        return resp
      })
    return out
  },
  logout (token) { // eslint-disable-line
    // TODO: Figure out example output
    clearAuthorization(token)
    return mockApi.logout(token)
  },
}
const students = {
  getAll (name) {
    return axios.get("students/").then(resp=>resp.data)
  }
}

const evaluations = {
  create (studentId) {
    return axios.post('evaluations/', {
      student:studentId,
      evaluator: 4
    }).then(resp => {
      console.log(resp.data)
      return resp.data.id
    })
  },
  get (id) {
    return axios.get(`evaluations/${id}/`).then(resp => resp.data)
  },
  getAll (query={}) {
    return axios.get('evaluations/', query).then(resp => resp.data)
  },
  delete (id) {
    return axios.delete(`evaluations/${id}/`)
  },
  // update (id, data) {
  //   return axios.patch(`evaluation/${id}`, data)
  // },
  updateSection (id, section, data) {
    const d = {
      [section]: data
    }
    return axios.patch(`evaluations/${id}/`, d)
  }
}

let api = {
  auth,
  evaluations,
  students
}

if (MOCK_MODE) {
  api = mockApi
}

export default api
