const { NotImplementedError } = require("../extensions/index.js")

function getCommonCharacterCount(s1, s2) {
  let count = 0

  for (let elem of s1) {
    if (s2.includes(elem)) {
      count++
      s2 = s2.replace(new RegExp(elem), "")
    }
  }
  return count
}

module.exports = {
  getCommonCharacterCount,
}
