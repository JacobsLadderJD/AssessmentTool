const Code = {
  DEFAULT: "Other",
  ADHD: "ADHD",
  ASD: "ASD",
  BI1: "BI1",
  BI2: "BI2",
  BI3: "BI3",
  DS: "DS",
  EDBS: "EDBS",
  GD: "GD",
  LD: "LD",
  PDD: "PDD"
}
const Status = {
  DEFAULT: "Initial",
  INITIAL: "Initial",
  R: (i) => {
    if (!Number.isInteger(i)) {
      throw TypeError("Invalid Status")
    }
    return "R-" + i
  },
}

const Student = (id, fname, lname, birthdate) => {
  const _id = id;
  let _firstName = fname,
      _lastName = lname,
      _code = Code.DEFAULT,
      _status = Status.DEFAULT;

  const isValidName = (name) => (
    typeof name === "string" && // name must be a string
    name !== "" && // name must not be empty
    !(/\d/.test(name)) // name must not contain numbers
  )
  const isValidBirthdate = (bdate) => (
    // must be a date
    Object.prototype.toString.call(date) === '[object Date]' &&
    date < new Date() // cannot be born today or in the future
  )
  const isValidCode = (code) => (
    Object.values(Code).contains(code) // code must exist
  )
  const isValidStatus = (status) => (
    Object.values(Status).contains(status) || // non-R status should exist
    /(R-([1-9]{1})([\d])*)/.test(status) // should be in format R-(integer)
  )

  return {
    getStoreObject: () => ({
      id: _id,
      firstName: _firstName,
      lastName: _lastName,
      birthdate: _birthdate,
      code: _code,
      status: _status
    }),
    getId: () => _id,
    getFirstName: () => _firstName,
    setFirstName (fname) {
      if (!isValidName(fname)) {
        throw TypeError("Invalid value '" + fname + "' for student first name")
      }
      _firstName = fname
    },
    getLastName: () => _lastName,
    setLastName (lname) {
      if (!isValidName(lname)) {
        throw TypeError("Invalid value '" + lname + "' for student last name")
      }
      _lastName = lname
    },
    getBirthdate: () => _birthdate,
    setBirthdate (birthdate) {
      if (!isValidBirthdate(birthdate)) {
        throw TypeError("Invalid birthdate '" + birthdate + "' for student")
      }
    },
    getCode: () => _lastName,
    setCode (code) {
      if (!isValidCode(code)) {
        throw TypeError("Invalid code '" + code + "' for student")
      }
      _code = code
    },
    getStatus: () => _lastName,
    setStatus (status) {
      if (!isValidStatus(status)) {
        throw TypeError("Invalid status '" + status + "' for student")
      }
      _status = status
    }
  }
}

export default Student
