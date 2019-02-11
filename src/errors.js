const ApiError = function (code, message) {
  const _code = code
  const _message = message
  return {
    getCode: () => _code,
    getMessage: () => _message,
    is: (err) => (_code === err.getCode() && _message === err.getMessage())
  }
}

const INVALID_AUTH = ApiError(403, "Unrecognized email and/or password")

export default {
  INVALID_AUTH
}
