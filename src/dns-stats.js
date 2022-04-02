const { NotImplementedError } = require("../extensions/index.js")

function getDNSStats(domains) {
  let container = []
  let result = {}

  domains = domains.map((item) =>
    item
      .split(".")
      .reverse()
      .map((item) => "." + item)
  )

  for (let i = 0; i < domains.length; i++) {
    let str = ""
    for (let j = 0; j < domains[i].length; j++) {
      str += domains[i][j]
      container.push(str)
    }
  }

  container.forEach((item) => (result[item] = (result[item] || 0) + 1))

  return result
}

module.exports = {
  getDNSStats,
}
