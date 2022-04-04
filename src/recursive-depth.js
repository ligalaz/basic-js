const { NotImplementedError } = require("../extensions/index.js")

class DepthCalculator {
  calculateDepth(arr) {
    return !Array.isArray(arr)
      ? 0
      : 1 + Math.max(0, ...arr.map((item) => this.calculateDepth(item)))
  }
}

module.exports = {
  DepthCalculator,
}
