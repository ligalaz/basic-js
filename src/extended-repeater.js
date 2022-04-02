const { NotImplementedError } = require("../extensions/index.js")

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addition, additionSeparator, additionRepeatTimes, separator, repeatTimes

  str = String(str)

  addition = options["addition"] || ""
  additionSeparator = options["additionSeparator"] || ""
  additionRepeatTimes = options["additionRepeatTimes"] || 1
  separator = options["separator"] || "+"
  repeatTimes = options["repeatTimes"] || 1

  addition = (addition + `${additionSeparator}`)
    .repeat(additionRepeatTimes)
    .replace(new RegExp(`${additionSeparator}$`), "")
  return (str + addition + `${separator}`)
    .repeat(repeatTimes)
    .replace(new RegExp(`\\${separator}`), "")
}

module.exports = {
  repeater,
}
