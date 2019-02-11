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
  logout (token) {
    return Promise.resolve(true)
  },
  authenticate (token) {
    // send the token back
    return Promise.resolve(true)
  }
}

export default MockJLCApi
