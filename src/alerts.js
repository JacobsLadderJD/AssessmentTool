import Vue from 'vue'

const error = (group, title, message="") => {
  Vue.notify({
    title,
    message,
    type: "error",
    group
  })
}

const success = (group, title, message="") => {
  Vue.notify({
    title,
    message,
    type: "success",
    group
  })
}
const authError = (title, message="") => {
  error("auth", title, message)
}
const authSuccess = (title, message="") => {
  success("auth", title, message)
}

export default {
  error,
  success,
  authError,
  authSuccess
}
