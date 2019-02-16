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
  error("main", title, message)
}
const authSuccess = (title, message="") => {
  success("main", title, message)
}

export default {
  error,
  success,
  authError,
  authSuccess
}
