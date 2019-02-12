const ApiError = function (code, message) {
  const _code = code
  let _message = message
  return {
    getCode: () => _code,
    getMessage: () => _message,
    setMessage: (m) => { _message = m },
    is: (err) => (_code === err.getCode())
  }
}

const INVALID_AUTH = ApiError(403, "Unrecognized email and/or password")
const NOT_FOUND = ApiError(403, "Item not found")

export default {
  INVALID_AUTH,
  NOT_FOUND
}
