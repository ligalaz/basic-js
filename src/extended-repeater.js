const { NotImplementedError } = require("../extensions/index.js")

function repeater(str, options) {
  let addition, firstHalf

  options["addition"] === false || options["addition"] === null
    ? (addition = String(options["addition"]) || "")
    : (addition = options["addition"] || "")

  let additionSeparator = options["additionSeparator"] || "|"
  let additionRepeatTimes = options["additionRepeatTimes"] || 1
  let separator = options["separator"] || "+"
  let repeatTimes = options["repeatTimes"] || 1

  function halfRepeater(how, what, than) {
    return new Array(how).fill(what).join(than)
  }

  firstHalf = halfRepeater(additionRepeatTimes, addition, additionSeparator)

  return halfRepeater(repeatTimes, `${str}${firstHalf}`, separator)
}

module.exports = {
  repeater,
}
