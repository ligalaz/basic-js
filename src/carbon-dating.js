const { NotImplementedError } = require("../extensions/index.js")

function dateSample(sampleActivity) {
  let activity = 15
  if (
    sampleActivity === "" ||
    Number(sampleActivity) >= activity ||
    Number(sampleActivity) === 0
  )
    return false
  if (typeof sampleActivity !== "string" || /[-a-z\s]+/i.test(sampleActivity))
    return false

  return Math.ceil(Math.log(activity / sampleActivity) / (0.693 / 5730))
}

module.exports = {
  dateSample,
}
