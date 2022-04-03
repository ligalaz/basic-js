const { NotImplementedError } = require("../extensions/index.js")

function getMatrixElementsSum(matrix) {
  let long = matrix.map((item) => item.length)[0]
  let result = new Array()

  matrix = matrix.flat()

  for (let i = 0; i < matrix.length; i++) {
    i < long
      ? result.push(matrix[i])
      : matrix[i - long] === 0
      ? result.push(0)
      : result.push(matrix[i])
  }
  return result.reduce((prev, curr) => prev + curr, 0)
}
module.exports = {
  getMatrixElementsSum,
}
