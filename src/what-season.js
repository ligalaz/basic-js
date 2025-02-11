const { NotImplementedError } = require("../extensions/index.js")

function getSeason(date) {
  if (!date) {
    return `Unable to determine the time of year!`
  }

  try {
    date.getTime()
  } catch (error) {
    throw new Error("Invalid date!")
  }

  let prop = date.getMonth()

  if (prop === 11 || (prop >= 0 && prop < 2)) {
    return "winter"
  } else if (prop >= 2 && prop < 5) {
    return "spring"
  } else if (prop >= 5 && prop < 8) {
    return "summer"
  } else if (prop >= 8 && prop < 11) {
    return "autumn"
  } else {
    return
  }
}

module.exports = {
  getSeason,
}
