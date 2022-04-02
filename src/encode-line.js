const { NotImplementedError } = require("../extensions/index.js")

function encodeLine(str) {
  let result = ""
  count = 1

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++
    } else {
      result += `${count + str[i]}`
      count = 1
    }
  }

  return result.replace(/1(?!\d)/g, "")
}

module.exports = {
  encodeLine,
}
