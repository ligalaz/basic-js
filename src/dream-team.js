const { NotImplementedError } = require("../extensions/index.js")

function createDreamTeam(members) {
  return members === [] || !Array.isArray(members)
    ? false
    : members
        .filter((item) => typeof item === "string")
        .map((item) => item.trim().toUpperCase())
        .sort()
        .map((item) => item[0]).join``
}

module.exports = {
  createDreamTeam,
}
