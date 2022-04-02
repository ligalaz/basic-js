const { NotImplementedError } = require("../extensions/index.js")

function isMAC48Address(n) {
  let regexp = /([A-F0-9]{2}-){5}[A-F0-9]{2}$/
  return regexp.test(n)
}
module.exports = {
  isMAC48Address,
}
