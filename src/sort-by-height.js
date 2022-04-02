const { NotImplementedError } = require("../extensions/index.js")

function sortByHeight(arr) {
  let container = arr.filter((item) => item != -1).sort((a, b) => a - b)

  return arr.map((item) => (item === -1 ? item : container.shift()))
}

module.exports = {
  sortByHeight,
}
