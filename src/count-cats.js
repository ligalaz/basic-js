const { NotImplementedError } = require("../extensions/index.js")

function countCats(matrix) {
  let regexp = /(?<!\s)\^{2}/g

  return matrix
    .map((item) => (item.join(",").match(regexp) || []).length)
    .reduce((prev, item) => prev + item, 0)
}

module.exports = {
  countCats,
}
