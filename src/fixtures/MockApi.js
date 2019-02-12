import errors from '@/errors'
const user = {
  "test@test.com" : {
    email: "test@test.com",
    password: "1234",
    token: "987654321123456789"
  }
}
const MockJLCApi = {
  login (email, password) {
    if (user[email]) {
      if (user[email].password === password) {
        return Promise.resolve(user[email].token)
      }
    }
    return Promise.reject(errors.INVALID_AUTH)
  },
  logout (token) { // eslint-disable-line
    return Promise.resolve(true)
  },
  authenticate (token) { // eslint-disable-line
    // send the token back
    return Promise.resolve(true)
  },
  searchStudentByNames (name) {
    return new Promise((resolve, reject) => {
      if (name === "") {
        resolve([])
      }
      const matchingStudents = [
        {
          id: 0,
          firstName: "James",
          lastName: "Marshall",
          birthday: new Date("08/21/2002"),
          gender: "M",
          diagnosis: "Autism",
          status: "Unclear"
        },
        {
          id: 1,
          firstName: "Jessie",
          lastName: "Mantle",
          birthday: new Date("03/02/2007"),
          gender: "F",
          diagnosis: "Cerebral Palsy",
          status: "Unclear"
        },
      ].filter(s => s.firstName.includes(name) || s.lastName.includes(name))
      if (matchingStudents.length < 1) {
        reject(errors.NOT_FOUND)
      } else {
        resolve(matchingStudents)
      }
    })
  }
}

export default MockJLCApi
