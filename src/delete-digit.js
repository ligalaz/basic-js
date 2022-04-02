const { NotImplementedError } = require("../extensions/index.js")

function deleteDigit(n) {
  let container = new Array()

  for (let elem of String(n)) {
    container.push(String(n).replace(new RegExp(`${elem}`), ""))
  }

  return +container.map((item) => +item).sort((a, b) => b - a)[0]
}

module.exports = {
  deleteDigit,
}
