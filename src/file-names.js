const { NotImplementedError } = require("../extensions/index.js")

function renameFiles(names) {
  let arr = [...names]

  for (let i = 0; i < names.length; i++) {
    let count = 1
    for (let j = 0; j < arr.length; j++) {
      if (names[i] === arr[j] && i !== j) {
        names[j] += "(" + count + ")"
        arr[j] += "(" + count + ")"
        count++
      }
    }
  }
  return names
}

module.exports = {
  renameFiles,
}
