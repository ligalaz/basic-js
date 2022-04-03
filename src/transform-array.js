const { NotImplementedError } = require("../extensions/index.js")

function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error(`'arr' parameter must be an instance of the Array!`)

  let container = [...arr]

  for (let i = 0; i <= container.length - 1; i++) {
    if (container[i] === "--double-prev") {
      container[i] = container[i - 1]
    }
    if (container[i] === "--double-next") {
      container[i] = container[i + 1]
    }
    if (container[i] === "--discard-next") {
      container[i] = undefined
      container[i + 1] = undefined
    }
    if (container[i] === "--discard-prev") {
      container[i] = undefined
      container[i - 1] = undefined
    }
  }
  return container.filter((item) => item !== undefined)
}

module.exports = {
  transform,
}
