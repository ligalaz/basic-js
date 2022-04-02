const { NotImplementedError } = require("../extensions/index.js")

function getEmailDomain(email) {
  return email.match(/(?<=@)[a-z\d.-]+$/i).join``
}
module.exports = {
  getEmailDomain,
}
