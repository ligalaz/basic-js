const { NotImplementedError } = require("../extensions/index.js")

function getSumOfDigits(n) {
  n = String(n).split``.reduce((prev, curr) => prev + +curr, 0)

  return String(n).length === 1 ? n : getSumOfDigits(n)
}

module.exports = {
  getSumOfDigits,
}
